'use client'
import { authClient } from "@/lib/auth-client"
import userAvatar from '@/assets/user.png';
import Image from "next/image";
import Link from "next/link";

const ProfilePage = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;
    return (
        <div className="hero min-h-screen bg-emerald-950">
            {isPending ? (<span className="loading loading-spinner loading-lg"></span>) : user ? (<div className="hero-content flex-col lg:flex-row gap-10">
                <div className="relative w-full max-w-md aspect-square overflow-hidden rounded-lg shadow-2xl">
                    <Image
                        src={user.image || userAvatar}
                        alt={user.name}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div>
                    <h1 className="text-5xl font-bold pb-6">UserName: {user.name}</h1>
                    <button className='btn mr-4 bg-red-500 text-white' onClick={async () => await authClient.signOut()}>Logout</button>
                    <Link href={"/update"}><button className="btn btn-info text-white">Update Profile</button></Link>
                </div>
            </div>) :
                (
                    <div className='flex flex-col'>
                        <h2 className="text-5xl">You are now Logged Out!</h2>
                    </div>
                )}
        </div>
    );
};

export default ProfilePage;