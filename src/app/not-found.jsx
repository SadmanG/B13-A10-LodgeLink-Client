import React from 'react';
import Link from 'next/link';

const NotFound = () => {
    return (
        <div className="min-h-[85vh] w-full bg-emerald-950 flex flex-col items-center justify-center p-6 relative overflow-hidden">
            
            {/* Soft background ambient glow decoration */}
            <div className="absolute w-100 h-100 bg-teal-500/5 blur-[120px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

            <div className="max-w-md w-full text-center flex flex-col items-center z-10">
                
                {/* Large Visual 404 Error Graphic Indicator */}
                <div className="relative mb-2 select-none">
                    <h1 className="text-[120px] md:text-[150px] font-black leading-none text-emerald-900 tracking-tighter">
                        404
                    </h1>
                    {/* Floating Overlay Text Accent */}
                    <div className="absolute inset-0 flex items-center justify-center mt-6">
                        <span className="text-teal-400 font-mono text-sm uppercase tracking-widest bg-emerald-950 px-3 py-1 rounded-full border border-emerald-800 shadow-md">
                            Lost Trail
                        </span>
                    </div>
                </div>

                {/* Messaging Blocks */}
                <div className="mb-8">
                    <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
                        This Lodge Doesn&apos;t Exist
                    </h2>
                    <p className="text-stone-300 text-sm font-medium mt-3 leading-relaxed">
                        The property or route module you are looking for has been moved off-the-grid, renamed, or deleted entirely.
                    </p>
                </div>

                {/* Navigational Quick-Link Action Links */}
                <div className="flex w-full flex-col sm:flex-row gap-3">
                    <Link 
                        href="/" 
                        className="btn bg-teal-500 hover:bg-teal-600 text-stone-900 font-bold border-none shadow-md flex-1 rounded-xl transition-transform active:scale-[0.98]"
                    >
                        Back to Home Base
                    </Link>
                    <Link 
                        href="/properties" 
                        className="btn btn-ghost border border-emerald-700 text-stone-200 hover:bg-emerald-800 flex-1 rounded-xl transition-all"
                    >
                        Explore Properties
                    </Link>
                </div>

                {/* Bottom Graphic Anchor */}
                <div className="mt-12 flex items-center gap-2 opacity-30 select-none text-stone-400 text-xs font-semibold uppercase tracking-wider">
                    <svg xmlns="http://w3.org" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    LodgeLink Navigation Systems
                </div>

            </div>
        </div>
    );
};

export default NotFound;
