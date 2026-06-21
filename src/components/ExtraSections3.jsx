"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from "motion/react"

const ExtraSections3 = () => {
    // Mock data for recently added cabin listings
    const newProperties = [
        {
            id: "prop-1",
            title: "A-Frame Redwoods Sanctuary",
            location: "California, USA",
            price: 189,
            rating: 4.9,
            type: "Cabin",
            beds: 3,
            image: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
        },
        {
            id: "prop-2",
            title: "Blackstone River Lodge",
            location: "Montana, USA",
            price: 245,
            rating: 5.0,
            type: "Lodge",
            beds: 4,
            image: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
        },
        {
            id: "prop-3",
            title: "The Glass Cabin Oasis",
            location: "Ontario, Canada",
            price: 310,
            rating: 4.8,
            type: "Villa",
            beds: 2,
            image: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
        }
    ];

    return (
        <section className="bg-emerald-900 py-16 px-4 sm:px-6 lg:px-8 border-t border-emerald-800">
            <div className="max-w-6xl mx-auto">

                {/* Section Header Element */}
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10 gap-4">
                    <div>
                        <span className="text-teal-400 text-xs font-bold uppercase tracking-widest block mb-1">
                            Fresh Off the Grid
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                            Recently Added Properties
                        </h2>
                    </div>
                    <Link href="/properties" className="text-sm font-bold text-teal-400 hover:text-teal-300 transition-colors flex items-center gap-1">
                        Explore all new listings
                        <svg xmlns="http://w3.org" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>

                {/* Properties Showcase Cards Grid Layout */}
                <div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {newProperties.map((property) => (
                        <motion.div
                            whileHover={{ scale: 1.15 }}
                            whileTap={{ scale: 0.95 }}
                            key={property.id}
                            className="bg-emerald-950/50 rounded-2xl overflow-hidden border border-emerald-800/60 shadow-xl flex flex-col group transition-all duration-300 hover:shadow-2xl hover:border-emerald-700/60"
                        >
                            {/* Image Frame Wrapper */}
                            <div className="h-56 relative w-full overflow-hidden bg-emerald-950">
                                <Image
                                    fill
                                    src={property.image}
                                    alt={property.title}
                                    sizes="(max-w-768px) 100vw, 33vw"
                                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                                />
                                {/* Dynamic Type Absolute Badge */}
                                <div className="absolute top-3 left-3">
                                    <span className="badge bg-emerald-900/90 border border-emerald-700 text-teal-400 font-bold text-xs uppercase tracking-wider px-2.5 py-2.5 shadow-md">
                                        {property.type}
                                    </span>
                                </div>
                                {/* New Listing Indicator Tag */}
                                <div className="absolute top-3 right-3">
                                    <span className="badge bg-teal-400 border-none text-stone-900 font-extrabold text-[10px] uppercase tracking-widest px-2 py-2 shadow-md animate-pulse">
                                        New
                                    </span>
                                </div>
                            </div>

                            {/* Property Metrics Text Panel */}
                            <div className="p-6 flex flex-col grow justify-between gap-4">
                                <div>
                                    <div className="flex items-center justify-between mb-1.5">
                                        <p className="text-stone-400 text-xs font-semibold tracking-wide flex items-center gap-1">
                                            <svg xmlns="http://w3.org" className="h-3.5 w-3.5 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            </svg>
                                            {property.location}
                                        </p>
                                        <span className="text-xs font-bold text-white flex items-center gap-1 bg-emerald-900 px-2 py-0.5 rounded border border-emerald-800">
                                            ⭐️ {property.rating}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-bold text-white tracking-tight leading-snug group-hover:text-teal-300 transition-colors line-clamp-1">
                                        {property.title}
                                    </h3>
                                    <p className="text-xs text-stone-300 font-medium mt-1">
                                        {property.beds} Beds Available
                                    </p>
                                </div>

                                {/* Booking Call to Action Row */}
                                <div className="flex items-center justify-between pt-4 border-t border-emerald-900 gap-2">
                                    <div>
                                        <span className="text-2xl font-black text-white">${property.price}</span>
                                        <span className="text-stone-400 text-xs font-medium"> / night</span>
                                    </div>
                                    <Link
                                        href={`/properties/${property.id}`}
                                        className="btn btn-sm bg-teal-500 hover:bg-teal-600 text-stone-900 border-none font-bold shadow-md tracking-wide px-4 rounded-xl transition-all"
                                    >
                                        Book Stay
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ExtraSections3;
