import Link from 'next/link';
import React from 'react';

const AdminDashboard = () => {
    // Optional Mock Stats for the top of the Admin View to maintain parity with your Owner layout
    const globalStats = {
        totalUsers: "1,240",
        platformVolume: "$142,500",
        activeListings: "312"
    };

    return (
        <div className="w-full min-h-screen p-2">
            
            {/* ADMIN SYSTEM COUNTERS (Parity with OwnerSummaryCards) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="bg-emerald-900/40 border border-emerald-800/60 rounded-2xl p-6 shadow-xl flex items-center justify-between">
                    <div>
                        <span className="text-stone-400 text-xs font-bold uppercase tracking-wider">System Users</span>
                        <h2 className="text-3xl font-black text-white mt-1">{globalStats.totalUsers}</h2>
                    </div>
                    <div className="text-teal-400 bg-emerald-950 p-3 rounded-xl border border-emerald-800">
                        <svg xmlns="http://w3.org" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                    </div>
                </div>
                <div className="bg-emerald-900/40 border border-emerald-800/60 rounded-2xl p-6 shadow-xl flex items-center justify-between">
                    <div>
                        <span className="text-stone-400 text-xs font-bold uppercase tracking-wider">Gross Volume</span>
                        <h2 className="text-3xl font-black text-white mt-1">{globalStats.platformVolume}</h2>
                    </div>
                    <div className="text-teal-400 bg-emerald-950 p-3 rounded-xl border border-emerald-800">
                        <svg xmlns="http://w3.org" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
                        </svg>
                    </div>
                </div>
                <div className="bg-emerald-900/40 border border-emerald-800/60 rounded-2xl p-6 shadow-xl flex items-center justify-between">
                    <div>
                        <span className="text-stone-400 text-xs font-bold uppercase tracking-wider">Global Listings</span>
                        <h2 className="text-3xl font-black text-white mt-1">{globalStats.activeListings}</h2>
                    </div>
                    <div className="text-teal-400 bg-emerald-950 p-3 rounded-xl border border-emerald-800">
                        <svg xmlns="http://w3.org" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* ADMIN ROUTES GRID: 2 Cards per row on large screen viewports (lg:grid-cols-2) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full my-6">
                
                {/* ROUTE 1: All Users */}
                <div
                    className="hero relative min-h-[45vh] md:min-h-[50vh] rounded-2xl overflow-hidden shadow-xl border border-emerald-800/20"
                    style={{
                        backgroundImage:
                            "url(https://plus.unsplash.com/premium_photo-1677252438411-9a930d7a5168?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dXNlciUyMGljb258ZW58MHx8MHx8fDA%3D)",
                    }}
                >
                    <div className="hero-overlay bg-emerald-950/75 backdrop-blur-[1px]"></div>
                    <div className="hero-content text-stone-100 text-center z-10 p-6">
                        <div className="max-w-md">
                            <h1 className="mb-3 text-3xl font-black tracking-tight text-white">All Users</h1>
                            <p className="mb-5 text-sm text-stone-300 font-medium">
                                Manage user accounts, permissions, and roles for hosts and tenants.
                            </p>
                            <Link href="/dashboard/admin/allusers">
                                <button className="btn bg-teal-500 hover:bg-teal-600 text-stone-900 font-bold border-none shadow-lg px-8 transition-transform active:scale-[0.98]">
                                    Manage Users
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* ROUTE 2: All Properties */}
                <div
                    className="hero relative min-h-[45vh] md:min-h-[50vh] rounded-2xl overflow-hidden shadow-xl border border-emerald-800/20"
                    style={{
                        backgroundImage:
                            "url(https://plus.unsplash.com/premium_photo-1683580362892-fc31c2ff935b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZhdm9yaXRlfGVufDB8fDB8fHww)",
                    }}
                >
                    <div className="hero-overlay bg-emerald-950/75 backdrop-blur-[1px]"></div>
                    <div className="hero-content text-stone-100 text-center z-10 p-6">
                        <div className="max-w-md">
                            <h1 className="mb-3 text-3xl font-black tracking-tight text-white">All Properties</h1>
                            <p className="mb-5 text-sm text-stone-300 font-medium">
                                Audit listed lodges, approve pending properties, and oversee removals.
                            </p>
                            <Link href="/dashboard/admin/allproperties">
                                <button className="btn bg-teal-500 hover:bg-teal-600 text-stone-900 font-bold border-none shadow-lg px-8 transition-transform active:scale-[0.98]">
                                    Review Properties
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* ROUTE 3: All Bookings */}
                <div
                    className="hero relative min-h-[45vh] md:min-h-[50vh] rounded-2xl overflow-hidden shadow-xl border border-emerald-800/20"
                    style={{
                        backgroundImage:
                            "url(https://images.unsplash.com/photo-1567473030492-533b30c5494c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFpbHxlbnwwfHwwfHx8MA%3D%3D)",
                    }}
                >
                    <div className="hero-overlay bg-emerald-950/75 backdrop-blur-[1px]"></div>
                    <div className="hero-content text-stone-100 text-center z-10 p-6">
                        <div className="max-w-md">
                            <h1 className="mb-3 text-3xl font-black tracking-tight text-white">All Bookings</h1>
                            <p className="mb-5 text-sm text-stone-300 font-medium">
                                Monitor system-wide check-ins, tracking schedules, and cancellations.
                            </p>
                            <Link href="/dashboard/admin/allbookings">
                                <button className="btn bg-teal-500 hover:bg-teal-600 text-stone-900 font-bold border-none shadow-lg px-8 transition-transform active:scale-[0.98]">
                                    Track Bookings
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* ROUTE 4: Transactions */}
                <div
                    className="hero relative min-h-[45vh] md:min-h-[50vh] rounded-2xl overflow-hidden shadow-xl border border-emerald-800/20"
                    style={{
                        backgroundImage:
                            "url(https://plus.unsplash.com/premium_photo-1681469490618-c24cc20bef1c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9uZXl8ZW58MHx8MHx8fDA%3D)",
                    }}
                >
                    <div className="hero-overlay bg-emerald-950/75 backdrop-blur-[1px]"></div>
                    <div className="hero-content text-stone-100 text-center z-10 p-6">
                        <div className="max-w-md">
                            <h1 className="mb-3 text-3xl font-black tracking-tight text-white">Transactions</h1>
                            <p className="mb-5 text-sm text-stone-300 font-medium">
                                Audit system payout models, process payouts, and tracking platform revenue.
                            </p>
                            <Link href="/dashboard/admin/transactions">
                                <button className="btn bg-teal-500 hover:bg-teal-600 text-stone-900 font-bold border-none shadow-lg px-8 transition-transform active:scale-[0.98]">
                                    Audit Transactions
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AdminDashboard;
