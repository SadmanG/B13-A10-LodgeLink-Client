import React from 'react';

const SearchBanner = () => {
    return (
        <div
            className="hero min-h-[85vh] relative"
            style={{
                // High-resolution warm forest cabin that matches the emerald brand theme
                backgroundImage:
                    "url(https://static.vecteezy.com/system/resources/thumbnails/050/751/453/small/cozy-cabin-in-forest-with-forced-perspective-photo.jpg)",
            }}
        >
            {/* Dark green ambient overlay matching our brand palette */}
            <div className="hero-overlay bg-emerald-950/60 backdrop-blur-[2px]"></div>
            
            <div className="hero-content text-stone-100 text-center flex-col gap-8 w-full max-w-5xl z-10 py-12">
                
                {/* Hero Headers */}
                <div className="max-w-2xl">
                    <h1 className="mb-4 text-4xl md:text-5xl font-black tracking-tight leading-none text-white">
                        Find Your Perfect <span className="text-teal-400">Rustic Stay</span>
                    </h1>
                    <p className="mb-2 text-base md:text-lg text-stone-200 font-medium">
                        Discover cozy cabins, lakeside lodges, and unique nature getaways tailored entirely to your lifestyle.
                    </p>
                </div>

                {/* Main Search Panel Container */}
                <div className="w-full bg-emerald-900/90 border border-emerald-700/50 backdrop-blur-md rounded-2xl p-6 shadow-2xl text-left">
                    <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
                        
                        {/* Field 1: Location */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-bold uppercase tracking-wider text-teal-400">Where to?</label>
                            <div className="relative">
                                <input 
                                    type="text" 
                                    placeholder="City, region, or park..." 
                                    className="input input-bordered w-full bg-emerald-950 border-emerald-700 text-white focus:outline-teal-400"
                                />
                            </div>
                        </div>

                        {/* Field 2: Property Type */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-bold uppercase tracking-wider text-teal-400">Property Type</label>
                            <select className="select select-bordered w-full bg-emerald-950 border-emerald-700 text-stone-200 focus:outline-teal-400 pt-2">
                                <option value="">All Types</option>
                                <option value="cabin">Cabin & Cottage</option>
                                <option value="lodge">Mountain Lodge</option>
                                <option value="villa">Luxury Villa</option>
                                <option value="room">Private Room</option>
                            </select>
                        </div>

                        {/* Field 3: Min Price */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-bold uppercase tracking-wider text-teal-400">Min Price</label>
                            <input 
                                type="number" 
                                placeholder="$ Min" 
                                min="0"
                                className="input input-bordered w-full bg-emerald-950 border-emerald-700 text-white focus:outline-teal-400"
                            />
                        </div>

                        {/* Field 4: Max Price */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-bold uppercase tracking-wider text-teal-400">Max Price</label>
                            <input 
                                type="number" 
                                placeholder="$ Max" 
                                min="0"
                                className="input input-bordered w-full bg-emerald-950 border-emerald-700 text-white focus:outline-teal-400"
                            />
                        </div>

                        {/* Field 5: Search Action Button */}
                        <div>
                            <button 
                                type="submit" 
                                className="btn bg-teal-500 hover:bg-teal-600 text-stone-900 border-none font-bold w-full shadow-lg transition-transform active:scale-[0.98]"
                            >
                                <svg xmlns="http://w3.org" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                Search
                            </button>
                        </div>

                    </form>
                </div>

            </div>
        </div>
    );
};

export default SearchBanner;
