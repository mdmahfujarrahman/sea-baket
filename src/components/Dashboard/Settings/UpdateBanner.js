import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useBanner from "../../../hooks/useBanner";
import Loading from "../../Sheard/Loading";

const UpdateBanner = () => {
    const [banner, isLoading] = useBanner({});
    const navigate = useNavigate();
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm();

    if (isLoading) {
        return <Loading />;
    }

    const imageStorageKey = "2bc7a08d0869c10a0b788f6de08bcd57";

    const onSubmit = (data) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append("image", image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;

        fetch(url, {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((upload) => {
                if (upload.success) {
                    const img = upload.data.url;
                    const updateImage = {
                        img: img,
                        _id: banner._id,
                    };

                    fetch(`https://seabasketorganic.herokuapp.com/images`, {
                        method: "PUT",
                        headers: {
                            "content-type": "application/json",
                        },
                        body: JSON.stringify(updateImage),
                    })
                        .then((res) => res.json())
                        .then((update) => {
                            if (update.modifiedCount > 0) {
                                reset();
                                toast.success("banner Update Successsfully");
                                navigate("/dashboard/settings");
                            }
                        });
                }
            });
    };

    return (
        <section>
            <div className="card mx-auto w-full  max-w-sm shadow-2xl mt-36 bg-base-100">
                <h5 className="text-center mt-8 text-4xl text-accent">
                    Upload New Banner 
                </h5>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
                    <div className="form-control mx-auto w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-accent">Banner</span>
                        </label>
                        <input
                            {...register("image", {
                                required: {
                                    value: true,
                                    message: "image is required",
                                },
                            })}
                            type="file"
                            className=" w-full max-w-xs"
                        />
                        <label className="label">
                            {errors.image?.type === "required" && (
                                <span className="label-text-alt text-red-500">
                                    {errors.image.message}
                                </span>
                            )}
                        </label>
                    </div>
                    <input
                        className="btn mt-4 btn-outline btn-primary"
                        type="submit"
                        value="Upload New Banner"
                    />
                    <Link to="/dashboard/settings">
                        <button className="btn w-80 btn-outline btn-success">
                            Back To Settings
                        </button>
                    </Link>
                </form>
            </div>
        </section>
    );
};

export default UpdateBanner;
