import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddBlogs = () => {
    const navigate = useNavigate();

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm();


    const imageStorageKey = "2bc7a08d0869c10a0b788f6de08bcd57";

    const onSubmit = (data) => {
        const title = data.title;
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
                    const addBlogs = {
                        img: img,
                        title: title.toLowerCase(),
                        guideIntro: data.guideIntro,
                    };

                    fetch(`https://seabasketorganic.herokuapp.com/guides`, {
                        method: "POST",
                        headers: {
                            "content-type": "application/json",
                        },
                        body: JSON.stringify(addBlogs),
                    })
                        .then((res) => {
                            return res.json();
                        })
                        .then((added) => {
                            if (added.results) {
                                toast.success(`Blogs successfully added`);
                                navigate("/dashboard/guides");
                            }
                        });
                }
            });
    };

    return (
        <section>
            <div className="card mx-auto w-full  max-w-sm shadow-2xl mt-36 bg-base-100">
                <h5 className="text-center mt-8 text-4xl text-accent">
                    Post New Guides Blogs
                </h5>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
                    <div className="form-control mx-auto w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-accent">
                                Blogs Photo
                            </span>
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
                    <div className="form-control mx-auto w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-accent">
                                Title
                            </span>
                        </label>
                        <textarea
                            {...register("title", {
                                required: {
                                    value: true,
                                    message: "Title is required",
                                },
                                minLength: {
                                    value: 25,
                                    message: "minimum 25 character required", // JS only: <p>error message</p> TS only support string
                                },
                            })}
                            type="text"
                            placeholder="Enter blogs Title"
                            className="input text-accent input-bordered focus:outline-primary w-full max-w-xs"
                        />
                        <label className="label">
                            {errors.title?.type === "required" && (
                                <span className="label-text-alt text-red-500">
                                    {errors.title.message}
                                </span>
                            )}
                        </label>
                        <label className="label">
                            {errors.title?.type === "minLength" && (
                                <span className="label-text-alt text-red-500">
                                    {errors.title.message}
                                </span>
                            )}
                        </label>
                    </div>
                    <div className="form-control mx-auto w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-accent">
                                Guide Intro
                            </span>
                        </label>
                        <textarea
                            {...register("guideIntro", {
                                required: {
                                    value: true,
                                    message: "Guide Intro is required",
                                },
                                minLength: {
                                    value: 75,
                                    message: "minimum 75 character required", // JS only: <p>error message</p> TS only support string
                                },
                            })}
                            type="text"
                            placeholder="Enter blogs intro"
                            className="input text-accent input-bordered focus:outline-primary w-full max-w-xs"
                        />
                        <label className="label">
                            {errors.guideIntro?.type === "required" && (
                                <span className="label-text-alt text-red-500">
                                    {errors.guideIntro.message}
                                </span>
                            )}
                        </label>
                        <label className="label">
                            {errors.answer?.type === "minLength" && (
                                <span className="label-text-alt text-red-500">
                                    {errors.answer.message}
                                </span>
                            )}
                        </label>
                    </div>
                    <input
                        className="btn mt-4 btn-outline btn-primary"
                        type="submit"
                        value="Post Blogs"
                    />
                    <Link to="/dashboard/guides">
                        <button className="btn w-80 btn-outline btn-success">
                            Back To Category
                        </button>
                    </Link>
                </form>
            </div>
        </section>
    );
};

export default AddBlogs;
