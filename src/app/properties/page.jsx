import React from 'react';
import { FaTree } from 'react-icons/fa';
import PropertiesGridWrapper from './PropertiesGridWrapper';
import { getProperties } from '@/lib/api/properties';

export const metadata = {
    title: "LodgeLink | All Properties",
    description: "Browse and book premium off-grid cabins, nature lodges, and luxury villas.",
};

const AllPropertiesPage = async () => {
    
    const allProperties = await getProperties();

    // 2. Initial security filter (only pass approved listings to the grid wrapper)
    const approvedProperties = allProperties.filter(property => property.status === 'approved');

    return (
        <div className="min-h-screen p-6 sm:p-10 font-sans bg-emerald-950 text-stone-100">
            <div className="max-w-6xl mx-auto">

                {/* Platform Header Section */}
                <div className="text-center mb-12">
                    <span className="text-teal-400 text-xs font-bold uppercase tracking-widest block mb-1">
                        Explore Open Spaces
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black mb-3 text-white flex justify-center items-center gap-3">
                        <span className="text-teal-400"><FaTree /></span>
                        <span>Find Your Perfect Rustic Stay</span>
                        <span className="text-teal-400"><FaTree /></span>
                    </h2>
                    <p className="text-stone-300 text-sm font-medium max-w-md mx-auto">
                        Browse through our curated platform registry of premium, verified nature getaways.
                    </p>
                </div>

                {/* Pass server data into the interactive filter grid layout wrapper */}
                <PropertiesGridWrapper initialProperties={approvedProperties} />

            </div>
        </div>
    );
};

export default AllPropertiesPage;