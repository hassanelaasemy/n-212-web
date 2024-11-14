import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from "axios";
import { BASE_URL } from '../../../config';

export default function Register() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [successMessage, setSuccessMessage] = useState("");

    const onSubmit = async (data) => {

        try {
            const response = await axios.post(`${BASE_URL}/api/register`, data);
            setSuccessMessage("Registration successful!");
        } catch (error) {
            console.error("There was an error submitting the form:", error);
        }
    };


    return (
        <>
            <div className="flex h-screen">
                {/* Left Pane */}
                <div className="lg:flex items-center justify-center flex-1 bg-gray-200 text-black">
                    <div className="max-w-md text-center ">
                        <img src="../../../public/logomain.png" alt="Logo" />
                    </div>
                </div>
                {/* Right Pane */}
                <div className="w-full bg-gray-100 lg:w-1/2 flex items-center justify-center">
                    <div className="max-w-md w-full p-6">
                        <h1 className="text-3xl font-semibold mb-6 text-black text-center">
                            Sign Up
                        </h1>
                        <h1 className="text-sm font-semibold mb-6 text-gray-500 text-center">
                            Join to Our Community with all-time access and free
                        </h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            <div>
                                <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    id="first_name"
                                    {...register("first_name", { required: "First name is required" })}
                                    className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                                />
                                {errors.first_name && <p className="text-red-500 text-sm">{errors.first_name.message}</p>}
                            </div>

                            <div>
                                <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    id="last_name"
                                    {...register("last_name", { required: "Last name is required" })}
                                    className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                                />
                                {errors.last_name && <p className="text-red-500 text-sm">{errors.last_name.message}</p>}
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^\S+@\S+$/i,
                                            message: "Invalid email address",
                                        },
                                    })}
                                    className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                                />
                                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    {...register("password", { required: "Password is required", minLength: 6 })}
                                    className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                                />
                                {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                            </div>

                            <div>
                                <label htmlFor="confirm_password" className="block text-sm font-medium text-gray-700">
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    id="password_confirmation"
                                    {...register("password_confirmation", {
                                        required: "Confirm password is required",
                                        validate: value => value === watch('password') || "Passwords do not match"
                                    })}

                                    className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                                />
                                {errors.password_confirmation && <p className="text-red-500 text-sm">{errors.password_confirmation.message}</p>}
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="w-full bg-black text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
                                >
                                    Sign Up
                                </button>
                            </div>
                        </form>
                        <div className="mt-4 text-sm text-gray-600 text-center">
                            <p>
                                Already have an account?{" "}
                                <a href="#" className="text-black hover:underline">
                                    Login here
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
