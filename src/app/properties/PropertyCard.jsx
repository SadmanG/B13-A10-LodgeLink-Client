import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const PropertyCard = ({ property }) => {
    return (
        <div className="bg-emerald-900/20 rounded-2xl overflow-hidden border border-emerald-800/50 shadow-xl flex flex-col group transition-all duration-300 hover:shadow-2xl hover:border-emerald-700/60">
            {/* Card Image Wrapper */}
            <div className="h-56 relative w-full overflow-hidden bg-emerald-950">
                <Image
                    fill
                    src={property.image}
                    alt={property.title}
                    sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                    <span className="badge bg-emerald-900/90 border border-emerald-700 text-teal-400 font-bold text-xs uppercase tracking-wider px-2.5 py-2.5 shadow-md">
                        {property.type}
                    </span>
                </div>
            </div>

            {/* Card Content Details */}
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
                            ★ {property.rating}
                        </span>
                    </div>
                    <h3 className="text-lg font-bold text-white tracking-tight leading-snug group-hover:text-teal-300 transition-colors line-clamp-1">
                        {property.title}
                    </h3>
                    <p className="text-xs text-stone-300 font-medium mt-1">
                        {property.beds} Beds Available
                    </p>
                </div>

                {/* Pricing & Call to Action */}
                <div className="flex items-center justify-between pt-4 border-t border-emerald-900/60 gap-2">
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
        </div>
    );
};

export default PropertyCard;
