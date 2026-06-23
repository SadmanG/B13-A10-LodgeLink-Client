'use client'
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const RegisterPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            role: "tenant"
        }
    });
    //const {
    //    register,               // Name(s) of input
    //    handleSubmit,           // Handle function
    //    watch,                  // Watch input values in real time
    //   formState: { errors }   // Show error messages
    //} = useForm()               // The Hook from React Hook Form

    // console.log(watch("email"));
    // console.log(watch("password"));

    const [isShowPassword, setIsShowPassword] = useState(false);

    const handleGoogleSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    };

    const handleRegisterFunc = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const user = Object.fromEntries(formData.entries());
        // console.log(data);
        // const { name, photo, email, password } = data;
        // console.log(name, photo, email, password);

        const { data: res, error } = await authClient.signUp.email({
            name: user.name, // required
            role: user.role, // required
            email: user.email, // required
            password: user.password, // required
            image: user.image
        });
        // console.log(res, error);
        if (error) {
            alert(error.message);
        }
        if (res) {
            alert("SignUp was Successful!");
            redirect('/');
        }
    }

    // const handleRegisterFunc = (e) => {
    //     e.preventDefault();
    //     const email = e.target.email.value;
    //     const password = e.target.password.value;
    //     console.log(email, password);
    // }
    // Then use name="email" or name ="password".

    return (
        <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-emerald-950 p-8">
            <div className="p-4 rounded-xl bg-gray-900">
                <h2 className="text-white font-bold text-3xl text-center mb-6">Register an Account</h2>
                <form className="space-y-4" onSubmit={handleRegisterFunc}>
                    {/* Name */}
                    <fieldset className="fieldset">
                        <legend className="text-white fieldset-legend">Your Name</legend>
                        <input type="text" className="input text-white" placeholder="Enter your Username"
                            {...register("name", { required: "Enter Your Username!" })} />
                        {errors.name && <p className="text-red-600">{errors.name.message}</p>}
                    </fieldset>
                    {/* Role Selection */}
                    <fieldset className="fieldset">
                        <legend className="text-white fieldset-legend">Select Your Role</legend>

                        <div className="flex flex-col sm:flex-row gap-4 mt-2">
                            {/* Tenant Option */}
                            <label className="flex items-center gap-3 cursor-pointer bg-emerald-950/60 border border-emerald-800/60 rounded-xl pl-1 py-1 flex-1 hover:border-emerald-600 transition-colors">
                                <input
                                    type="radio"
                                    value="tenant"
                                    className="radio border-emerald-600 checked:bg-teal-400 checked:border-teal-400"
                                    {...register("role", { required: "Please select a platform role!" })}
                                />
                                <div className="flex flex-col">
                                    <span className="text-white font-bold text-sm">Tenant</span>
                                    <span className="text-stone-400 text-xs">I want to book stays</span>
                                </div>
                            </label>

                            {/* Owner Option */}
                            <label className="flex items-center gap-3 cursor-pointer bg-emerald-950/60 border border-emerald-800/60 rounded-xl pl-1 py-1 flex-1 hover:border-emerald-600 transition-colors">
                                <input
                                    type="radio"
                                    value="owner"
                                    className="radio border-emerald-600 checked:bg-teal-400 checked:border-teal-400"
                                    {...register("role", { required: "Please select a platform role!" })}
                                />
                                <div className="flex flex-col">
                                    <span className="text-white font-bold text-sm">Owner</span>
                                    <span className="text-stone-400 text-xs">I want to list properties</span>
                                </div>
                            </label>
                        </div>

                        {/* Validation Error Message */}
                        {errors.role && (
                            <p className="text-red-400 text-xs font-semibold mt-2 pl-1 animate-pulse">
                                {errors.role.message}
                            </p>
                        )}
                    </fieldset>
                    {/* Photo URL */}
                    <fieldset className="fieldset">
                        <legend className="text-white fieldset-legend">Photo URL</legend>
                        <input type="text" className="input text-white" placeholder="Enter your Photo URL"
                            {...register("image", { required: "Enter Your Photo URL!" })} />
                        {errors.image && <p className="text-red-600">{errors.image.message}</p>}
                    </fieldset>
                    {/* Email Address */}
                    <fieldset className="fieldset">
                        <legend className="text-white fieldset-legend">Email Address</legend>
                        <input type="email" className="input text-white" placeholder="Enter your Email Address"
                            {...register("email", { required: "Enter Your Email!" })} />
                        {errors.email && <p className="text-red-600">{errors.email.message}</p>}
                    </fieldset>
                    {/* Password */}
                    <fieldset className="fieldset relative">
                        <legend className="text-white fieldset-legend">Password</legend>
                        <input type={isShowPassword ? "text" : "password"} className="input text-white" placeholder="Enter your Password"
                            {...register("password", { required: "Give Your Password!" })} />
                        <span onClick={() => setIsShowPassword(!isShowPassword)} className="text-xl absolute right-10 top-4 cursor-pointer"
                        >{isShowPassword ? <FaEye /> : <FaEyeSlash />}</span>
                        {errors.password && <p className="text-red-600">{errors.password.message}</p>}
                    </fieldset>
                    <button className="btn w-full bg-blue-500 border-black text-white">Register</button>
                </form>
                <p className="text-white mt-6 border-t border-gray-800 pt-5 flex items-center justify-center">OR</p>
                <button className='btn border-blue-500 text-blue-500 w-full mt-4' onClick={handleGoogleSignIn}><FcGoogle /> Login with Google</button>
                <p className="text-white mt-6 border-t border-gray-800 pt-5">Already have an account? <Link href={"/login"} className="text-green-600">Login Now</Link></p>
            </div>
        </div>
    );
};

export default RegisterPage;