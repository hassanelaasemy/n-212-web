import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { RegisterService } from '../../services/RegisterService';
import { Link, useNavigate } from 'react-router-dom';

export default function Register() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const navigateLogin = useNavigate();

    const [successMessage, setSuccessMessage] = useState("");
    const [erreurs, setErrorMessage] = useState({});
    const onSubmit = async (data) => {
        try {
            const response = RegisterService(data, setErrorMessage, setSuccessMessage, navigateLogin)
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className="flex h-full">
                {/* Left Pane */}
                <div className="lg:flex items-center justify-center flex-1  text-black">
                    <div className="max-w-md text-center ">
                        <img src="../../public/logomain.png" />
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
                            <div className="grid grid-cols-12 gap-4">
                                {/* First Name */}
                                <div className="col-span-6">
                                    <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        id="first_name"
                                        {...register("first_name")}
                                        className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                                    />
                                    {erreurs.first_name && <p className="text-red-500 text-sm">{erreurs.first_name[0]}</p>}
                                </div>

                                {/* Last Name */}
                                <div className="col-span-6">
                                    <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        id="last_name"
                                        {...register("last_name")}
                                        className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                                    />
                                    {erreurs.last_name && <p className="text-red-500 text-sm">{erreurs.last_name[0]}</p>}
                                </div>
                            </div>


                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    {...register("email")}
                                    className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                                />

                                {erreurs.email && <p className="text-red-500 text-sm">{erreurs.email[0]}</p>}
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    {...register("password")}
                                    className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                                />

                                {erreurs.password && <p className="text-red-500 text-sm">{erreurs.password[0]}</p>}
                            </div>

                            <div>
                                <label htmlFor="confirm_password" className="block text-sm font-medium text-gray-700">
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    id="password_confirmation"
                                    {...register("password_confirmation")}
                                    className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                                />

                                {erreurs.password_confirmation && <p className="text-red-500 text-sm">{erreurs.password_confirmation[0]}</p>}
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
                                <Link to="/login" className="text-black hover:underline">
                                    Login here
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
