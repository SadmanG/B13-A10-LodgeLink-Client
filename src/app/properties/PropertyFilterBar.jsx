"use client";

import React from 'react';

const PropertyFilterBar = ({ 
    searchLocation, 
    setSearchLocation, 
    selectedType, 
    setSelectedType, 
    sortOrder, 
    setSortOrder 
}) => {
    return (
        <div className="w-full bg-emerald-900/40 border border-emerald-800/60 rounded-2xl p-5 shadow-xl mb-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                
                {/* 1. Location Search Input */}
                <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-teal-400">Search Location</label>
                    <input 
                        type="text"
                        placeholder="Search by city, country..."
                        value={searchLocation}
                        onChange={(e) => setSearchLocation(e.target.value)}
                        className="input input-bordered w-full bg-emerald-950 border-emerald-700 text-white focus:outline-teal-400 px-4 py-2.5 rounded-xl text-sm"
                    />
                </div>

                {/* 2. Filter Dropdown for Property Type */}
                <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-teal-400">Property Type</label>
                    <select 
                        value={selectedType}
                        onChange={(e) => setSelectedType(e.target.value)}
                        className="select select-bordered w-full bg-emerald-950 border-emerald-700 text-stone-200 focus:outline-teal-400 text-center pr-8 h-10.5 rounded-xl text-sm pt-2.5"
                    >
                        <option value="" className="text-left">All Types</option>
                        <option value="cabin" className="text-left">Cabin & Cottage</option>
                        <option value="lodge" className="text-left">Mountain Lodge</option>
                        <option value="villa" className="text-left">Luxury Villa</option>
                        <option value="room" className="text-left">Private Room</option>
                    </select>
                </div>

                {/* 3. Sorting Dropdown Rules */}
                <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-teal-400">Sort By Price</label>
                    <select 
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
                        className="select select-bordered w-full bg-emerald-950 border-emerald-700 text-stone-200 focus:outline-teal-400 text-center pr-8 h-10.5 rounded-xl text-sm pt-2.5"
                    >
                        <option value="" className="text-left">Default Order</option>
                        <option value="low-to-high" className="text-left">Price: Low to High</option>
                        <option value="high-to-low" className="text-left">Price: High to Low</option>
                    </select>
                </div>

            </div>
        </div>
    );
};

export default PropertyFilterBar;