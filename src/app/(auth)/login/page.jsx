'use client'
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
    const handleGoogleSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    };
    const {
        register,               // Name(s) of input
        handleSubmit,           // Handle function
        watch,                  // Watch input values in real time
        formState: { errors }   // Show error messages
    } = useForm()               // The Hook from React Hook Form 

    // console.log(watch("email"));
    // console.log(watch("password"));

    const [isShowPassword, setIsShowPassword] = useState(false);

    const handleLoginFunc = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const user = Object.fromEntries(formData.entries());
        // console.log(data);

        const { data: res, error } = await authClient.signIn.email({
            email: user.email, // required
            password: user.password, // required
            rememberMe: true
        });
        // console.log(res, error);
        if (error) {
            alert(error.message);
        }
        if (res) {
            alert("SignIn was Successful!");
            redirect('/');
        }
    }

    // const handleLoginFunc = (e) => {
    //     e.preventDefault();
    //     const email = e.target.email.value;
    //     const password = e.target.password.value;
    //     console.log(email, password);
    // }
    // Then use name="email" or name ="password".

    return (
        <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-emerald-950 p-8">
            <div className="p-4 rounded-xl bg-gray-900">
                <h2 className="text-white font-bold text-3xl text-center mb-6">Login your Account</h2>
                <form className="space-y-4" onSubmit={handleLoginFunc}>
                    <fieldset className="fieldset">
                        <legend className="text-white fieldset-legend">Email Address</legend>
                        <input type="email" className="input text-white" placeholder="Enter your Email Address"
                            {...register("email", { required: "Email must be given!" })} />
                        {errors.email && <p className="text-red-600">{errors.email.message}</p>}
                    </fieldset>
                    <fieldset className="fieldset relative">
                        <legend className="text-white fieldset-legend">Password</legend>
                        <input type={isShowPassword ? "text" : "password"}
                            className="input text-white" placeholder="Enter your Password"
                            {...register("password", { required: "Password must be filled!" })} />
                        <span onClick={() => setIsShowPassword(!isShowPassword)} className="text-xl absolute right-2 top-4 cursor-pointer"
                        >{isShowPassword ? <FaEye /> : <FaEyeSlash />}</span>
                        {errors.password && <p className="text-red-600">{errors.password.message}</p>}
                    </fieldset>
                    <button className="btn w-full bg-green-500 border-black text-white">Login</button>
                </form>
                <p className="text-white mt-6 border-t border-gray-800 pt-5 flex items-center justify-center">OR</p>
                <button className='btn border-blue-500 text-blue-500 w-full mt-4' onClick={handleGoogleSignIn}><FcGoogle /> Login with Google</button>
                <p className="text-white mt-6 border-t border-gray-800 pt-5">Don&apos;t have an account? <Link href={"/register"} className="text-blue-600">Register Now</Link></p>
            </div>
        </div>
    );
};

export default LoginPage;