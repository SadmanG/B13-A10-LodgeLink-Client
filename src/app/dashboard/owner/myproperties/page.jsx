import React from 'react';
import Link from 'next/link';
import { FaPlus, FaTree } from 'react-icons/fa';
import { getUserSession } from '@/lib/core/session';
import { getProperties } from '@/lib/api/properties';
import OwnerPropertiesGrid from './OwnerPropertiesGrid'; // Import the new client grid part below

const MyPropertiesPage = async () => {
    // 1. Capture the authenticated host's session profile directly on the server
    const user = await getUserSession();
    
    // 2. Fetch the global database records securely directly over server networks
    const allProperties = await getProperties();

    // 3. Filter down property listings matching this owner's explicit unique ID
    const ownerProperties = allProperties.filter(property => 
        property.ownerId === user?._id || property.ownerId === user?.id
    );

    return (
        <div className="w-full min-h-screen bg-emerald-950 text-stone-100 p-6 sm:p-10 font-sans">
            <div className="max-w-6xl mx-auto">
                
                {/* HEADER CONTROL ACTIONS BAR */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-10 gap-4 border-b border-emerald-900 pb-6">
                    <div>
                        <span className="text-teal-400 text-xs font-bold uppercase tracking-widest block mb-1">Host Management Panel</span>
                        <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">My Properties</h1>
                        <p className="text-stone-300 text-xs sm:text-sm mt-0.5">Manage and review your active, approved off-grid stay listings.</p>
                    </div>
                    <Link href="/dashboard/owner/addproperty">
                        <button className="btn bg-teal-500 hover:bg-teal-600 text-stone-900 font-bold border-none shadow-lg px-5 rounded-xl flex items-center gap-2 transition-transform active:scale-[0.98] text-sm">
                            <FaPlus className="text-xs" /> Add New Property
                        </button>
                    </Link>
                </div>

                {/* CONDITIONAL LAYOUT RECONSTRUCTION CONTAINER */}
                {ownerProperties.length > 0 ? (
                    <OwnerPropertiesGrid initialOwnerProperties={ownerProperties} />
                ) : (
                    /* EMPTY VIEW PORT STATE PLACEHOLDER SKELETON */
                    <div className="w-full bg-emerald-900/20 border border-emerald-800/40 rounded-2xl py-20 px-4 text-center flex flex-col items-center justify-center">
                        <div className="w-12 h-12 bg-emerald-950 rounded-xl border border-emerald-800 flex items-center justify-center text-teal-400 mb-4 shadow-inner">
                            <FaTree />
                        </div>
                        <h3 className="text-lg font-bold text-white tracking-tight">You Haven&apos;t Listed Any Properties</h3>
                        <p className="text-stone-400 text-sm max-w-xs mt-1 font-medium mb-5">Get started by publishing your first mountain lodge or rustic cabin setting on LodgeLink!</p>
                        <Link href="/dashboard/owner/addproperty" className="btn bg-teal-500 hover:bg-teal-600 text-stone-900 font-bold border-none shadow-md rounded-xl text-xs px-6">
                            List Your First Space
                        </Link>
                    </div>
                )}

            </div>
        </div>
    );
};

export default MyPropertiesPage;
