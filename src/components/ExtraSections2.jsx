import React from 'react';

const ExtraSections2 = () => {
    // Metrics layout data structure
    const metrics = [
        {
            value: "45K+",
            label: "Completed Bookings",
            icon: (
                <svg xmlns="http://w3.org" className="h-5 w-5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            value: "12,800+",
            label: "Verified Stays",
            icon: (
                <svg xmlns="http://w3.org" className="h-5 w-5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
            )
        },
        {
            value: "4.9 / 5",
            label: "Guest Satisfaction",
            icon: (
                <svg xmlns="http://w3.org" className="h-5 w-5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
            )
        },
        {
            value: "24 Mins",
            label: "Avg. Host Response Time",
            icon: (
                <svg xmlns="http://w3.org" className="h-5 w-5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        }
    ];

    return (
        <section className="bg-emerald-900 py-12 px-4 sm:px-6 lg:px-8 border-y border-emerald-800">
            <div className="max-w-6xl mx-auto">
                {/* Statistics Inner Panel */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 divide-y-0 divide-x-0 sm:gap-y-10">
                    {metrics.map((stat, idx) => (
                        <div 
                            key={idx} 
                            className="flex flex-col items-center lg:items-start text-center lg:text-left gap-2 p-2 group"
                        >
                            {/* Decorative Metric Head Node */}
                            <div className="flex items-center gap-2.5">
                                <div className="p-1.5 bg-emerald-950 rounded-lg border border-emerald-700/60 shadow-inner group-hover:scale-110 transition-transform">
                                    {stat.icon}
                                </div>
                                <span className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                                    {stat.value}
                                </span>
                            </div>
                            {/* Metric Label Description */}
                            <p className="text-stone-300 text-xs sm:text-sm font-medium tracking-wide">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExtraSections2;
