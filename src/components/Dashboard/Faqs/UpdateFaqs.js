import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from "react-toastify";


const UpdateFaqs = () => {
    const { id } = useParams();
    const [faqsDetails, setFaqsDetails] = useState('')

    const navigate = useNavigate();

    const {
         register,
         formState: { errors },
         handleSubmit,
         reset,
    } = useForm();

    useEffect(() => {
        fetch(`https://seabasketorganic.herokuapp.com/faqs/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setFaqsDetails(data);
            });
    }, [id]);



    const onSubmit =  (data) => {

        const updateFaqs = {
            question: data.question,
            answer: data.answer,
        };

        if (updateFaqs){
            fetch(`https://seabasketorganic.herokuapp.com/faqs/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updateFaqs),
        })
            .then((res) => res.json())
            .then((update) => {
                if (update.modifiedCount > 0) {
                    reset();
                    toast.success("Question and answer Update Successfully");
                    navigate("/dashboard/faqs");
                }
            });
        
        }
            



    }



    


    return (
        <section>
            <div className="card mx-auto w-full  max-w-sm shadow-2xl mt-36 bg-base-100">
                <h5 className="text-center mt-8 text-4xl text-accent">
                    Update Question & Answer
                </h5>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
                    <div className="form-control mx-auto w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-accent">
                                Question
                            </span>
                        </label>
                        <textarea
                            {...register("question", {
                                required: {
                                    value: true,
                                    message: "Question is required",
                                },
                                minLength: {
                                    value: 30,
                                    message: "minimum 30 character required", // JS only: <p>error message</p> TS only support string
                                },
                            })}
                            type="text"
                            defaultValue={faqsDetails.question}
                            className="input text-accent input-bordered focus:outline-primary w-full max-w-xs"
                        />
                        <label className="label">
                            {errors.question?.type === "required" && (
                                <span className="label-text-alt text-red-500">
                                    {errors.question.message}
                                </span>
                            )}
                        </label>
                        <label className="label">
                            {errors.question?.type === "minLength" && (
                                <span className="label-text-alt text-red-500">
                                    {errors.question.message}
                                </span>
                            )}
                        </label>
                    </div>
                    <div className="form-control mx-auto w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-accent">
                                Answer
                            </span>
                        </label>
                        <textarea
                            {...register("answer", {
                                required: {
                                    value: true,
                                    message: "Answer is required",
                                },
                                minLength: {
                                    value: 75,
                                    message: "minimum 75 character required", // JS only: <p>error message</p> TS only support string
                                },
                            })}
                            type="text"
                            defaultValue={faqsDetails.answer}
                            className="input text-accent input-bordered focus:outline-primary w-full max-w-xs"
                        />
                        <label className="label">
                            {errors.answer?.type === "required" && (
                                <span className="label-text-alt text-red-500">
                                    {errors.answer.message}
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
                        value="Update Question"
                    />
                    <Link to="/dashboard/faqs">
                        <button className="btn w-80 btn-outline btn-success">
                            Back To Category
                        </button>
                    </Link>
                </form>
            </div>
        </section>
    );
};

export default UpdateFaqs;