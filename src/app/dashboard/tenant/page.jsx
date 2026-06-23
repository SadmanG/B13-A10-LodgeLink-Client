import Link from 'next/link';
import React from 'react';

const TenantDashboard = () => {
    return (
        <div className="flex flex-col md:flex-row min-h-[90vh] w-full">
            <div
                className="hero flex-1 relative min-h-[50vh] md:min-h-screen"
                style={{
                    backgroundImage:
                        "url(https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvcGVydHl8ZW58MHx8MHx8fDA%3D)",
                }}
            >
                <div className="hero-overlay bg-emerald-950/70 backdrop-blur-[1px]"></div>
                <div className="hero-content text-stone-100 text-center z-10 p-6">
                    <div className="max-w-md">
                        <h1 className="mb-4 text-3xl md:text-4xl font-black tracking-tight text-white">My Bookings</h1>
                        <p className="mb-6 text-sm md:text-base text-stone-300 font-medium">
                            See what premium properties you have booked so far!
                        </p>
                        <Link href="/dashboard/tenant/mybookings">
                            <button className="btn bg-teal-500 hover:bg-teal-600 text-stone-900 font-bold border-none shadow-lg px-8 transition-transform active:scale-[0.98]">
                                See Your Bookings
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div
                className="hero flex-1 relative min-h-[50vh] md:min-h-screen border-t md:border-t-0 md:border-l border-emerald-800/40"
                style={{
                    backgroundImage:
                        "url(https://plus.unsplash.com/premium_photo-1683580362892-fc31c2ff935b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZhdm9yaXRlfGVufDB8fDB8fHww)",
                }}
            >
                {/* Dark emerald overlay matching the brand theme */}
                <div className="hero-overlay bg-emerald-950/70 backdrop-blur-[1px]"></div>
                <div className="hero-content text-stone-100 text-center z-10 p-6">
                    <div className="max-w-md">
                        <h1 className="mb-4 text-3xl md:text-4xl font-black tracking-tight text-white">Your Favorites</h1>
                        <p className="mb-6 text-sm md:text-base text-stone-300 font-medium">
                            See what you have marked as favorite from our list of properties!
                        </p>
                        {/* LodgeLink Tech Teal Button */}
                        <Link href="/dashboard/tenant/favorites">
                            <button className="btn bg-teal-500 hover:bg-teal-600 text-stone-900 font-bold border-none shadow-lg px-8 transition-transform active:scale-[0.98]">
                                See Favorites
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TenantDashboard;