import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase/firebase.init';
import useToken from '../../../hooks/useToken';
import Loading from '../../Sheard/Loading';

const Login = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();
    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);
    const [token] = useToken(user);
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";

    let signInError

    useEffect(() => {
        if (token) {
            console.log("ok");
            navigate(from, { replace: true });
        }
    }, [token, from, navigate]);

    if(error){
        if(error?.message === 'Firebase: Error (auth/user-not-found).'){
            signInError = (
                <small className="text-red-500 text-center">user not found</small>
            );
        } else if (error?.message === 'Firebase: Error (auth/wrong-password).'){
            signInError = (
                <small className="text-red-500 text-center">
                    Wrong Password, please try again
                </small>
            );
        }
    }
    

    if (loading) {
        return <Loading />;
    }


    
    const onSubmit = async (data) => {
        await signInWithEmailAndPassword(data.email, data.password)
    }

    return (
        <section className="hero min-h-screen text-accent bg-home-bg">
            <div className="hero-content flex-col lg:flex-row-reverse ">
                <div className="card flex-shrink-0 w-80 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <h1 className="text-center text-2xl my-4">
                            Please Log in
                        </h1>
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
                                placeholder="Your Email Address"
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
                            {signInError}
                            <label className="label">
                                <label className="label">
                                    <a
                                        href="/"
                                        className="label-text-alt link link-hover text-accent"
                                    >
                                        Forgot password?
                                    </a>
                                </label>
                                <Link
                                    to="/signup"
                                    className="label-text-alt link link-hover text-accent"
                                >
                                    Craete a New Account!
                                </Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input
                                type="submit"
                                value="Login"
                                className="btn btn-primary text-secondary"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Login;