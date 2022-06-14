import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <section className="hero min-h-screen text-accent bg-home-bg">
            <div class="hero-content flex-col lg:flex-row-reverse ">
                <div class="card flex-shrink-0 w-80 max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                        <h1 className="text-center text-2xl my-4">
                            Please Log in
                        </h1>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text text-accent">
                                    Enter Your Name
                                </span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Your name"
                                class="input input-bordered border-primary"
                            />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text text-accent">
                                    Email
                                </span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Your Email"
                                class="input input-bordered border-primary"
                            />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text text-accent">
                                    Password
                                </span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Your Password"
                                class="input input-bordered border-primary"
                            />
                            <label class="label">
                                <Link
                                    to="/login"
                                    class="label-text-alt link link-hover text-accent"
                                >
                                    Already have an account? Sign in
                                </Link>
                            </label>
                        </div>
                        <div class="form-control mt-6">
                            <button class="btn btn-primary text-secondary">
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Signup;