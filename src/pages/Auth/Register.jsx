import React from 'react';



export default function Register() {
    return (
        <div className="min-h-full flex flex-col justify-center px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20">
            {/* Left Section: Logo and Title */}
            <div className="sm:mx-auto sm:w-full sm:max-w-sm lg:flex lg:flex-col lg:justify-center lg:items-center">
                <img
                    className="mx-auto h-20 w-auto"
                    src="../../../public/logomain.png"
                    alt="Your Company"
                />
                <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900 lg:text-left">
                    Sign up
                </h2>
            </div>
    
            {/* Right Section: Form */}
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST">
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="text"
                            name="first_name"
                            id="floating_first_name"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="floating_first_name"
                            className="absolute text-sm text-gray-500 transform -translate-y-6 scale-75 top-3 origin-[0] transition-all duration-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            First Name
                        </label>
                    </div>
    
                    {/* Additional form fields (last name, email, etc.) */}
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="text"
                            name="last_name"
                            id="floating_last_name"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="floating_last_name"
                            className="absolute text-sm text-gray-500 transform -translate-y-6 scale-75 top-3 origin-[0] transition-all duration-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Last Name
                        </label>
                    </div>


                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="email"
                            name="email"
                            id="floating_email"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="floating_email"
                            className="absolute text-sm text-gray-500 transform -translate-y-6 scale-75 top-3 origin-[0] transition-all duration-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Email
                        </label>
                    </div>

                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="password"
                            name="password"
                            id="floating_password"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="floating_password"
                            className="absolute text-sm text-gray-500 transform -translate-y-6 scale-75 top-3 origin-[0] transition-all duration-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Password
                        </label>
                    </div>

                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="password"
                            name="confirm_password"
                            id="floating_confirm_password"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="floating_confirm_password"
                            className="absolute text-sm text-gray-500 transform -translate-y-6 scale-75 top-3 origin-[0] transition-all duration-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Confirme Password
                        </label>
                    </div>
    
    
                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Sign up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    
    )
}
