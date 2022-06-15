import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateCategory = () => {
    const {id} = useParams()
    const[categoryDetails, setCategoryDetails] = useState({})
    
    const navigate = useNavigate()
    
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm();


    useEffect(() => {
        fetch(`https://seabasketorganic.herokuapp.com/categories/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setCategoryDetails(data)
                
            });
    },[id])

    const imageStorageKey = "2bc7a08d0869c10a0b788f6de08bcd57";
  
    const onSubmit =  (data) => {
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
                const updateCategory = {
                    img: img,
                    name: data.name,
                };

            fetch(`https://seabasketorganic.herokuapp.com/categories/${id}`, {
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(updateCategory),
            })
                .then((res) => res.json())
                .then((update) => {
                    if (update.modifiedCount > 0) {
                        reset();
                        toast.success("Your Profile Update Successfully");
                        navigate("/dashboard");
                    }
                });
                }
            });
    }

    return (
        <section>
            <div className="card mx-auto w-full  max-w-sm shadow-2xl mt-36 bg-base-100">
                <h5 className="text-center mt-8 text-4xl text-accent">
                    Update <span className="text-primary uppercase">{categoryDetails.name}</span> Category
                </h5>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
                    <div className="form-control mx-auto w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-accent">
                                Photo
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
                            <span className="label-text text-accent">Name</span>
                        </label>
                        <input
                            {...register("name")}
                            type="text"
                            placeholder={categoryDetails.name}
                            className="input input-bordered focus:outline-primary w-full max-w-xs"
                        />
                    </div>
                    <input
                        className="btn mt-4 btn-outline btn-primary"
                        type="submit"
                        value="Update Category"
                    />
                    <Link to="/dashboard">
                        <button className="btn w-80 btn-outline btn-success">
                            Back To Category
                        </button>
                    </Link>
                </form>
            </div>
        </section>
    );
};

export default UpdateCategory;