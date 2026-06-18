import React from 'react';

const ExtraSections1 = () => {
    // Curated top destinations array
    const locations = [
        {
            name: "Blue Ridge Cabins",
            region: "Georgia, USA",
            propertiesCount: 142,
            image: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
        },
        {
            name: "Alpine Hideaways",
            region: "Zermatt, Switzerland",
            propertiesCount: 89,
            image: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
        },
        {
            name: "Lakeside Retreats",
            region: "Alberta, Canada",
            propertiesCount: 114,
            image: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
        },
        {
            name: "Pacific Eco-Lodges",
            region: "Oregon Coast, USA",
            propertiesCount: 76,
            image: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
        }
    ];

    return (
        <section className="bg-emerald-950 py-16 px-4 sm:px-6 lg:px-8 border-t border-emerald-900/40">
            <div className="max-w-6xl mx-auto">
                
                {/* Header Element */}
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10 gap-4">
                    <div>
                        <span className="text-teal-400 text-xs font-bold uppercase tracking-widest block mb-1">
                            Inspiration for your next trip
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                            Explore Top Destinations
                        </h2>
                    </div>
                    <button className="btn btn-sm bg-emerald-900 border-emerald-700 hover:bg-emerald-800 text-teal-400 font-bold self-start sm:self-auto">
                        View All Regions
                    </button>
                </div>

                {/* Destinations Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {locations.map((loc, idx) => (
                        <div 
                            key={idx} 
                            className="group relative h-80 rounded-2xl overflow-hidden shadow-xl cursor-pointer border border-emerald-900/50"
                        >
                            {/* Background Image Wrapper with Smooth Hover Zoom */}
                            <div 
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                                style={{ backgroundImage: `url(${loc.image})` }}
                            />
                            
                            {/* Linear Gradient Gradient Scrim */}
                            <div className="absolute inset-0 bg-linear-to-t from-emerald-950 via-emerald-950/40 to-transparent opacity-90 group-hover:via-emerald-950/50 transition-opacity" />

                            {/* Content Badge Layer */}
                            <div className="absolute top-4 right-4">
                                <span className="badge bg-emerald-900/90 border border-emerald-600/50 text-teal-300 font-bold text-xs px-2.5 py-3 shadow-md">
                                    {loc.propertiesCount} Lodges
                                </span>
                            </div>

                            {/* Bottom Label Layer */}
                            <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end">
                                <h3 className="text-lg font-bold text-white tracking-tight mb-0.5 group-hover:text-teal-300 transition-colors">
                                    {loc.name}
                                </h3>
                                <p className="text-stone-300 text-xs font-medium flex items-center gap-1">
                                    <svg xmlns="http://w3.org" className="h-3.5 w-3.5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    {loc.region}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ExtraSections1;
