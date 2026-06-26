'use client'; // Error components must be Client Components

import React, { useEffect } from 'react';

const Error = ({ error, reset }) => {
    useEffect(() => {
        // Log the error to an analytics or error tracking service
        console.error("LodgeLink System Error Catastrophic Break:", error);
    }, [error]);

    return (
        <div className="min-h-[80vh] w-full bg-emerald-950 flex flex-col items-center justify-center p-6">
            <div className="max-w-md w-full bg-emerald-900/30 border border-emerald-800/60 rounded-2xl p-8 shadow-2xl text-center flex flex-col items-center gap-6">
                
                {/* Warning Alert Icon */}
                <div className="w-14 h-14 bg-red-950/50 text-red-400 border border-red-800 rounded-xl flex items-center justify-center shadow-inner">
                    <svg xmlns="http://w3.org" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                </div>

                <div>
                    <h2 className="text-2xl font-black text-white tracking-tight">Something Went Wrong</h2>
                    <p className="text-stone-300 text-sm font-medium mt-2 leading-relaxed">
                        We ran into a slight network trail issue loading this workspace module. Let&apos;s try re-routing.
                    </p>
                </div>

                {/* Optional: Dev details container for simple testing logs */}
                {error?.message && (
                    <div className="w-full bg-emerald-950/80 rounded-lg p-2.5 border border-emerald-800 text-[11px] font-mono text-red-300 text-left overflow-x-auto select-all max-h-20">
                        Error: {error.message}
                    </div>
                )}

                {/* Call to Actions */}
                <div className="flex w-full flex-col sm:flex-row gap-3 mt-2">
                    <button
                        onClick={() => reset()} // Next.js built-in recovery function
                        className="btn bg-teal-500 hover:bg-teal-600 text-stone-900 font-bold border-none shadow-md flex-1 rounded-xl transition-transform active:scale-[0.98]"
                    >
                        Try Again
                    </button>
                    <button 
                        onClick={() => window.location.href = '/'}
                        className="btn btn-ghost border border-emerald-700 text-stone-200 hover:bg-emerald-800 flex-1 rounded-xl"
                    >
                        Return Home
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Error;
