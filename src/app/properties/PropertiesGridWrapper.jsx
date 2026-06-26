"use client";

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaStar, FaBed, FaBath, FaRulerCombined, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';
import PropertyFilterBar from './PropertyFilterBar';

const PropertiesGridWrapper = ({ initialProperties }) => {
    const [searchLocation, setSearchLocation] = useState('');
    const [selectedType, setSelectedType] = useState('');
    const [sortOrder, setSortOrder] = useState('');

    // Compute interactive search results instantly over the database records
    const filteredAndSortedProperties = useMemo(() => {
        let result = [...initialProperties];

        if (searchLocation.trim() !== '') {
            result = result.filter(property => 
                property.location.toLowerCase().includes(searchLocation.toLowerCase()) ||
                property.title.toLowerCase().includes(searchLocation.toLowerCase())
            );
        }

        if (selectedType !== '') {
            result = result.filter(property => property.type === selectedType);
        }

        if (sortOrder === 'low-to-high') {
            result.sort((a, b) => a.price - b.price);
        } else if (sortOrder === 'high-to-low') {
            result.sort((a, b) => b.price - a.price);
        }

        return result;
    }, [initialProperties, searchLocation, selectedType, sortOrder]);

    return (
        <>
            {/* Embedded Search and Filter Options Panel */}
            <PropertyFilterBar 
                searchLocation={searchLocation}
                setSearchLocation={setSearchLocation}
                selectedType={selectedType}
                setSelectedType={setSelectedType}
                sortOrder={sortOrder}
                setSortOrder={setSortOrder}
            />

            {/* Render loop context area grid */}
            {filteredAndSortedProperties.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredAndSortedProperties.map((property) => (
                        <div 
                            key={property._id} 
                            className="rounded-2xl overflow-hidden bg-emerald-900/30 border border-emerald-800/40 flex flex-col justify-between hover:border-emerald-700/60 shadow-xl group transition-all duration-300"
                        >
                            <div className="relative h-60 w-full bg-emerald-950 overflow-hidden">
                                <Image
                                    src={property.image}
                                    alt={property.title}
                                    fill
                                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                                    sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                                />
                                <span className="absolute top-3 left-3 bg-emerald-950/90 text-teal-400 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md shadow-md border border-emerald-800">
                                    {property.type}
                                </span>
                            </div>

                            <div className="p-6 flex flex-col grow">
                                <div className="flex items-center gap-1.5 text-xs text-stone-400 font-semibold mb-1.5">
                                    <FaMapMarkerAlt className="text-teal-500" />
                                    <span>{property.location}</span>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-teal-300 transition-colors line-clamp-1">
                                    {property.title}
                                </h3>

                                <p className="text-stone-300 text-xs leading-relaxed font-medium mb-4 line-clamp-2">
                                    {property.description}
                                </p>

                                <div className="grid grid-cols-3 gap-2 border-t border-b border-emerald-900 py-3.5 mb-5 text-xs font-bold text-stone-300">
                                    <div className="flex flex-col items-center gap-1 border-r border-emerald-900">
                                        <FaBed className="text-teal-400 text-sm" />
                                        <span>{property.beds} Beds</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-1 border-r border-emerald-900">
                                        <FaBath className="text-teal-400 text-sm" />
                                        <span>{property.bathrooms} Baths</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-1">
                                        <FaRulerCombined className="text-teal-400 text-sm" />
                                        <span className="text-[10px] sm:text-xs truncate max-w-full">{property.propertySize} sqft</span>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between mt-auto pt-1">
                                    <div>
                                        <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block">Nightly Rate</span>
                                        <p className="text-2xl font-black text-white">
                                            ${property.price}<span className="text-stone-400 text-xs font-medium">/nt</span>
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <span className="text-xs font-bold text-white flex items-center gap-1 bg-emerald-950 px-2 py-1 rounded border border-emerald-900 mr-1">
                                            ★ {property.rating}
                                        </span>

                                        <Link href={`/properties/${property._id}`}>
                                            <button className="px-4 py-2.5 rounded-xl font-bold text-stone-900 bg-teal-500 hover:bg-teal-600 transition-all duration-200 flex items-center gap-1.5 shadow-md active:scale-95">
                                                Book <FaArrowRight className="text-xs" />
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="w-full bg-emerald-900/20 border border-emerald-800/40 rounded-2xl py-16 px-4 text-center">
                    <h3 className="text-xl font-bold text-white tracking-tight">No Matching Lodges Found</h3>
                    <p className="text-stone-400 text-sm mt-1 max-w-sm mx-auto">Try resetting or loosening up your location search constraints to find active stays.</p>
                </div>
            )}
        </>
    );
};

export default PropertiesGridWrapper;