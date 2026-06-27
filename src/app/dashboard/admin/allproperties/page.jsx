import React from 'react';
import { getProperties } from '@/lib/api/properties';
import AdminPropertiesTable from './AdminPropertiesTable';

export const metadata = {
    title: "LodgeLink Admin | Manage Listings",
    description: "Audit, approve, or reject system-wide property listings.",
};

const AllPropertiesPage = async () => {
    // 1. Fetch live database records securely directly on the server layer
    const allProperties = await getProperties();

    return (
        <div className="w-full min-h-screen bg-emerald-950 text-stone-100 p-6 sm:p-10 font-sans">
            <div className="max-w-6xl mx-auto">
                
                {/* Header Information Element */}
                <div className="mb-8 border-b border-emerald-900 pb-6">
                    <span className="text-teal-400 text-xs font-bold uppercase tracking-widest block mb-1">
                        System Administration
                    </span>
                    <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                        Global Property Moderation
                    </h1>
                    <p className="text-stone-300 text-xs sm:text-sm mt-0.5">
                        Review submissions, approve pending hosts, or restrict non-compliant platform records.
                    </p>
                </div>

                {/* Mount the interactive HeroUI table grid layout wrapper */}
                <AdminPropertiesTable propertiesData={allProperties} />

            </div>
        </div>
    );
};

export default AllPropertiesPage;
