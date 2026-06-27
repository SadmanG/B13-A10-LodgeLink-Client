"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from "motion/react";

const ExtraSections3 = () => {
    // 1. Dynamic platform lifecycle state managers
    const [properties, setProperties] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // 2. Fetch live database records on component mount
    useEffect(() => {
        const fetchRecentProperties = async () => {
            try {
                setIsLoading(true);
                const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:5000';
                const res = await fetch(`${baseUrl}/properties`);
                
                if (!res.ok) throw new Error("Failed to pull recent properties from backend");
                
                const data = await res.json();
                
                // Filter for 'approved' status and sort to display the most recently created listings first
                const approvedAndSorted = data
                    .filter(property => property.status === 'approved')
                    .slice(-3) // Limits the display cleanly to the last 3 additions
                    .reverse(); // Ensures the absolute newest listing comes first
                
                setProperties(approvedAndSorted);
            } catch (error) {
                console.error("LodgeLink Recent Properties Load Error:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchRecentProperties();
    }, []);

    // 3. Motion Variant Definitions for Stagger Orchestration Layouts
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.15 } // Creates smooth delayed sequential pop-ups
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
    };

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

                {/* PROPERTIES SHOWCASE GRID CONTENT ENGINE */}
                {isLoading ? (
                    /* Loading state placeholder loop spinner container */
                    <div className="w-full flex items-center justify-center py-20">
                        <div className="w-12 h-12 border-4 border-emerald-800 border-t-teal-400 rounded-full animate-spin"></div>
                    </div>
                ) : properties.length > 0 ? (
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show" // Activates animation naturally as the visitor scrolls down
                        viewport={{ once: true, margin: "-100px" }} // Triggers layout build once
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        {properties.map((property) => (
                            <motion.div
                                variants={cardVariants}
                                whileHover={{ scale: 1.03, y: -5 }} // Slightly reduced hover scale to keep layout tight on desktops
                                whileTap={{ scale: 0.98 }}
                                key={property._id || property.id}
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
                                            <span className="text-xs font-bold text-white flex items-center gap-1 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800 shadow-sm">
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
                                            href={`/properties/${property._id || property.id}`}
                                            className="btn btn-sm bg-teal-500 hover:bg-teal-600 text-stone-900 border-none font-bold shadow-md tracking-wide px-4 rounded-xl transition-all"
                                        >
                                            Book Stay
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                ) : (
                    /* Fallback display layout if database array collection is empty */
                    <div className="w-full bg-emerald-950/40 border border-emerald-800/40 rounded-2xl py-12 text-center text-stone-400 text-sm">
                        No recently added properties found.
                    </div>
                )}

            </div>
        </section>
    );
};

export default ExtraSections3;
