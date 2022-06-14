import React from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from "react-firebase-hooks/auth";
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from "../../../firebase/firebase.init";
import useToken from '../../../hooks/useToken';
import Loading from '../../Sheard/Loading';

const Signup = () => {
    const {
        register,
        formState: { errors },
        handleSubmit
    } = useForm();
    const [createUserWithEmailAndPassword, user, loading, error] =
        useCreateUserWithEmailAndPassword(auth, {
             sendEmailVerification: true,
         });
    const [updateProfile, updating, uError] = useUpdateProfile(auth);
    const [token] = useToken(user);
    const navigate = useNavigate()

    let signUpError;
    if (error || uError) {
        if (error?.message === "Firebase: Error (auth/email-already-in-use).") {
            signUpError = (
                <p className="text-red-500 text-center">
                    <small>
                        Email already use
                    </small>
                </p>
            );
        }
        if (uError) {
            signUpError = (
                <p className="text-red-500 text-center">
                    <small>Update {uError?.message}</small>
                </p>
            );
        }

    }
    if (loading) {
        return <Loading />;
    }
    if (token) {
        navigate("/");
        
    }

    const onSubmit = async (data) => {
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName : data.name});

    }
    
    

    return (
        <section className="hero min-h-screen text-accent bg-home-bg">
            <div className="hero-content flex-col lg:flex-row-reverse ">
                <div className="card flex-shrink-0 w-80 lg:96 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <h1 className="text-center text-2xl my-4">
                            Please Sign Up
                        </h1>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-accent">
                                    Name
                                </span>
                            </label>
                            <input
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: "Name is required",
                                    },
                                })}
                                type="text"
                                placeholder="Enter Your Name"
                                className="input input-bordered w-full max-w-xs outline-primary"
                            />
                            <label className="label">
                                {errors.name?.type === "required" && (
                                    <span className="label-text-alt text-red-500">
                                        {errors.name.message}
                                    </span>
                                )}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-accent">
                                    Email
                                </span>
                            </label>
                            <input
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email is required",
                                    },
                                    pattern: {
                                        value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/,
                                        message: "Provide a valid email",
                                    },
                                })}
                                type="email"
                                placeholder="Enter Your Email Address"
                                className="input input-bordered w-full max-w-xs outline-primary"
                            />
                            <label className="label">
                                {errors.email?.type === "required" && (
                                    <span className="label-text-alt text-red-500">
                                        {errors.email.message}
                                    </span>
                                )}
                            </label>
                            <label className="label">
                                {errors.email?.type === "pattern" && (
                                    <span className="label-text-alt text-red-500">
                                        {errors.email.message}
                                    </span>
                                )}
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-accent">
                                    Password
                                </span>
                            </label>
                            <input
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Password is required",
                                    },
                                    minLength: {
                                        value: 6,
                                        message:
                                            "Must be 6 Characters or Longer",
                                    },
                                })}
                                type="password"
                                placeholder="Your Password"
                                className="input input-bordered w-full max-w-xs outline-primary"
                            />
                            <label className="label">
                                {errors.password?.type === "required" && (
                                    <span className="label-text-alt text-red-500">
                                        {errors.password.message}
                                    </span>
                                )}
                            </label>
                            <label className="label">
                                {errors.password?.type === "minLength" && (
                                    <span className="label-text-alt text-red-500">
                                        {errors.password.message}
                                    </span>
                                )}
                            </label>
                            {signUpError}
                            <label className="label">
                                <label className="label">
                                    <small>Already have a account?</small>
                                    <Link
                                        to="/login"
                                        className="label-text-alt link link-hover text-accent ml-2"
                                    >
                                        Login
                                    </Link>
                                </label>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input
                                type="submit"
                                value="Sign Up"
                                className="btn btn-primary text-secondary"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};;

export default Signup;