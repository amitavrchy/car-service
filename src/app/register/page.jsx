import Image from 'next/image'
import React from 'react'
import { useForm } from "react-hook-form";

const page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data Submitted:", data);
  };
  return (
    <div className='flex w-4/5 mx-auto py-16'>
      <div>
        <Image src="./assets/images/login/login.svg" width={300} height={300} />
      </div>
      <div>
        <form>
          <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Sign Up</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Name Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: "Name is required" })}
                    className={`w-full px-4 py-2 border ${errors.name ? "border-red-500" : "border-gray-300"
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Invalid email address",
                      },
                    })}
                    className={`w-full px-4 py-2 border ${errors.email ? "border-red-500" : "border-gray-300"
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400`}
                    placeholder="example@mail.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                {/* Password Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                    })}
                    className={`w-full px-4 py-2 border ${errors.password ? "border-red-500" : "border-gray-300"
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400`}
                    placeholder="Enter your password"
                  />
                  {errors.password && (
                    <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default page