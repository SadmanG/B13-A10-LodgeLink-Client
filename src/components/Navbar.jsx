"use client";

import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const {
        data: session,
        isPending, //loading state
        //error, //error object
        //refetch //refetch the session
    } = authClient.useSession();
    const user = session?.user;

    //Signout
    const router = useRouter();
    const handleSignOut = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.push("/login"); // redirect to login page
                },
            },
        });
    }

    // Toggle this boolean to simulate logged-in or logged-out states
    const isLoggedIn = user ? true : false;

    // Get the current active URL path
    const pathname = usePathname();

    const dashboardHref = user?.role ? `/dashboard/${user.role}` : "/login";

    const getLinkClass = (path, baseClasses) => {
        const isActive = pathname === path || pathname.startsWith(path + '/');
        return `${baseClasses} ${isActive ? 'text-teal-400 bg-emerald-950 font-semibold' : 'hover:bg-emerald-800 text-stone-200'}`;
    };

    return (
        <div className="navbar bg-emerald-900 text-stone-100 shadow-md relative">
            {/* NAVBAR START: Logo & Brand Name */}
            <div className="navbar-start z-50">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-stone-100 hover:bg-emerald-800">
                        <svg xmlns="http://w3.org" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    {/* Mobile Dropdown Menu */}
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-emerald-800 text-stone-100 rounded-box z-1 mt-3 w-52 p-2 shadow-xl border border-emerald-700">
                        <li><Link href="/" className={getLinkClass('/', 'rounded-md')}>Home</Link></li>
                        <li><Link href="/properties" className={getLinkClass('/properties', 'rounded-md')}>All Properties</Link></li>
                        {isLoggedIn && <li><Link href="/dashboard" className={getLinkClass('/dashboard', 'rounded-md')}>Dashboard</Link></li>}
                    </ul>
                </div>
                {/* Brand Name Logo */}
                <Link href="/" className="btn btn-ghost text-xl font-bold tracking-tight text-green-400 hover:bg-emerald-800">
                    LodgeLink
                </Link>
            </div>

            {/* NAVBAR CENTER: Main Navigation Links */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-medium gap-2">
                    <li><Link href="/" className={getLinkClass('/', 'rounded-lg transition-colors px-4 py-2 block')}>Home</Link></li>
                    <li><Link href="/properties" className={getLinkClass('/properties', 'rounded-lg transition-colors px-4 py-2 block')}>All Properties</Link></li>
                    {/* Dynamic dashboard navigation link */}
                    {isLoggedIn && (
                        <li>
                            <Link
                                href={dashboardHref}
                                className={getLinkClass(`/dashboard/${user?.role}`, 'rounded-lg px-4 py-2 block')}
                            >
                                Dashboard
                            </Link>
                        </li>
                    )}
                </ul>
            </div>

            {/* NAVBAR END: Authentication & Profile Action Area */}
            <div className="navbar-end gap-2 z-50">
                {!isLoggedIn ? (
                    <>
                        <Link href="/login" className={getLinkClass('/login', 'btn btn-ghost')}>Login</Link>
                        <Link href="/register" className="btn bg-teal-500 hover:bg-teal-600 text-stone-900 font-bold border-none shadow-sm">Register</Link>
                    </>
                ) : (
                    <div className='flex'>
                        <h2 className='mr-2 mt-2'>Hi, {user?.name}</h2>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar ring-2 ring-emerald-600 hover:ring-teal-400 transition-all">
                                <div className="w-10 rounded-full">
                                    <Image
                                        height={100}
                                        width={100}
                                        alt="User Profile Avatar"
                                        src={user?.image} />
                                </div>
                            </div>
                            <ul
                                tabIndex="-1"
                                className="menu menu-sm dropdown-content bg-emerald-800 text-stone-100 rounded-box z-1 mt-3 w-52 p-2 shadow-xl border border-emerald-700">
                                <li>
                                    <Link href="/profile" className={getLinkClass('/profile', 'justify-between')}>
                                        Profile
                                        <span className={`badge border-none font-bold text-xs ${user?.role === 'admin' ? 'bg-amber-400 text-stone-900' :
                                            user?.role === 'owner' ? 'bg-teal-400 text-stone-900' :
                                                'bg-stone-500 text-stone-100' // Default style for tenant
                                            }`}>
                                            {user?.role === 'admin' && 'Admin'}
                                            {user?.role === 'owner' && 'Owner'}
                                            {user?.role === 'tenant' && 'Tenant'}
                                        </span>
                                    </Link>
                                </li>
                                <li><Link href="/settings" className={getLinkClass('/settings', '')}>Settings</Link></li>
                                <div className="divider border-emerald-700 my-1 opacity-50"></div>
                                <li className="btn text-red-400 hover:bg-red-950/50 hover:text-red-300 font-medium" onClick={handleSignOut}>Logout</li>
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
