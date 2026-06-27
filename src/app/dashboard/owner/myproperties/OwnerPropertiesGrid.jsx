"use client";

import React from 'react';
import Image from 'next/image';
import { FaBed, FaBath, FaMapMarkerAlt } from 'react-icons/fa';
import { EditPropertyModal } from '@/components/EditPropertyModal';
import { DeletePropertyAlert } from '@/components/DeletePropertyAlert';

const OwnerPropertiesGrid = ({ initialOwnerProperties }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {initialOwnerProperties.map((property) => (
                <div 
                    key={property._id} 
                    className="bg-emerald-900/30 border border-emerald-800/40 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between group hover:border-emerald-700/60 transition-all duration-300"
                >
                    {/* Image display frame with live status absolute trackers */}
                    <div className="h-52 w-full relative overflow-hidden bg-emerald-950">
                        <Image
                            fill
                            src={property.image}
                            alt={property.title}
                            sizes="(max-w-768px) 100vw, 33vw"
                            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                        />
                        {/* Status Badge Overlays */}
                        <div className="absolute top-3 right-3">
                            <span className={`badge border-none font-bold text-[10px] uppercase tracking-widest px-2.5 py-2.5 shadow-md ${
                                property.status === 'approved' ? 'bg-teal-400 text-stone-900' : 'bg-amber-400 text-stone-900 animate-pulse'
                            }`}>
                                {property.status}
                            </span>
                        </div>
                    </div>

                    {/* Text specifications core overview body */}
                    <div className="p-5 flex flex-col grow justify-between gap-4">
                        <div>
                            <p className="text-stone-400 text-[11px] font-semibold tracking-wide flex items-center gap-1 mb-1">
                                <FaMapMarkerAlt className="text-teal-500" /> {property.location}
                            </p>
                            <h3 className="text-base font-bold text-white tracking-tight line-clamp-1 group-hover:text-teal-300 transition-colors">
                                {property.title}
                            </h3>
                            
                            {/* Core parameter structural rows */}
                            <div className="flex items-center gap-4 text-xs font-semibold text-stone-300 mt-3 bg-emerald-950/40 border border-emerald-900/60 rounded-xl px-3 py-2 w-fit">
                                <span className="flex items-center gap-1"><FaBed className="text-teal-400" /> {property.beds} Beds</span>
                                <span className="w-1 h-1 bg-emerald-800 rounded-full block"></span>
                                <span className="flex items-center gap-1"><FaBath className="text-teal-400" /> {property.bathrooms} Baths</span>
                            </div>
                        </div>

                        {/* Footer controls utility link rows */}
                        <div className="flex items-center justify-between pt-4 border-t border-emerald-900/50 gap-2 mt-2">
                            <div>
                                <span className="text-xl font-black text-white">${property.price}</span>
                                <span className="text-stone-400 text-[11px]"> / night</span>
                            </div>
                            
                            <div className="flex gap-2">
                                <EditPropertyModal property={property}/>
                                <DeletePropertyAlert property={property}/>
                            </div>
                        </div>
                    </div>

                </div>
            ))}
        </div>
    );
};

export default OwnerPropertiesGrid;
