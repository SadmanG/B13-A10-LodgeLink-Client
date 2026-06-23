import React from 'react';

const OwnerSummaryCards = () => {
    // Mock data mimicking database aggregates for the active owner
    const summaryData = {
        totalEarnings: 14850,
        totalProperties: 8,
        totalBookings: 42
    };

    return (
        <section className="w-full py-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                
                <div className="bg-emerald-900/40 border border-emerald-800/60 rounded-2xl p-6 mx-2 shadow-xl flex items-center justify-between group hover:border-emerald-600 transition-all duration-300">
                    <div className="flex flex-col gap-1">
                        <span className="text-stone-400 text-xs font-bold uppercase tracking-wider">
                            Total Earnings
                        </span>
                        <span className="text-3xl font-black text-white tracking-tight">
                            ${summaryData.totalEarnings.toLocaleString()}
                        </span>
                        <span className="text-teal-400 text-[11px] font-semibold mt-1 flex items-center gap-1">
                            ↑ 12% increase this month
                        </span>
                    </div>
                    <div className="w-12 h-12 bg-emerald-950 rounded-xl flex items-center justify-center border border-emerald-800 shadow-inner group-hover:scale-110 transition-transform text-teal-400">
                        <svg xmlns="http://w3.org" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                </div>

                <div className="bg-emerald-900/40 border border-emerald-800/60 rounded-2xl p-6 mx-2 shadow-xl flex items-center justify-between group hover:border-emerald-600 transition-all duration-300">
                    <div className="flex flex-col gap-1">
                        <span className="text-stone-400 text-xs font-bold uppercase tracking-wider">
                            Total Properties
                        </span>
                        <span className="text-3xl font-black text-white tracking-tight">
                            {summaryData.totalProperties}
                        </span>
                        <span className="text-stone-400 text-[11px] font-medium mt-1">
                            Active listed stays
                        </span>
                    </div>
                    <div className="w-12 h-12 bg-emerald-950 rounded-xl flex items-center justify-center border border-emerald-800 shadow-inner group-hover:scale-110 transition-transform text-teal-400">
                        <svg xmlns="http://w3.org" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                    </div>
                </div>

                <div className="bg-emerald-900/40 border border-emerald-800/60 rounded-2xl p-6 mx-2 shadow-xl flex items-center justify-between group hover:border-emerald-600 transition-all duration-300 sm:col-span-2 lg:col-span-1">
                    <div className="flex flex-col gap-1">
                        <span className="text-stone-400 text-xs font-bold uppercase tracking-wider">
                            Total Bookings
                        </span>
                        <span className="text-3xl font-black text-white tracking-tight">
                            {summaryData.totalBookings}
                        </span>
                        <span className="text-teal-400 text-[11px] font-semibold mt-1">
                            Confirmed stay requests
                        </span>
                    </div>

                    <div className="w-12 h-12 bg-emerald-950 rounded-xl flex items-center justify-center border border-emerald-800 shadow-inner group-hover:scale-110 transition-transform text-teal-400">
                        <svg xmlns="http://w3.org" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default OwnerSummaryCards;