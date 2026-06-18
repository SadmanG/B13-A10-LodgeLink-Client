import React from 'react';

const ChooseUsSection = () => {
    // Modular features array for clean code scaling
    const features = [
        {
            icon: (
                <svg xmlns="http://w3.org" className="h-6 w-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            title: "Verified Lodges Only",
            description: "Every single property on our platform undergoes a strict verification check to guarantee comfort, safety, and visual accuracy."
        },
        {
            icon: (
                <svg xmlns="http://w3.org" className="h-6 w-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
            ),
            title: "100% Secure Bookings",
            description: "Your dynamic payments and sensitive personal records are safeguarded by enterprise-grade cryptographic encryptions."
        },
        {
            icon: (
                <svg xmlns="http://w3.org" className="h-6 w-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 005.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            title: "Transparent Community",
            description: "Direct host-to-guest chat networks coupled with authenticated peer reviews protect your trip from unexpected surprises."
        },
        {
            icon: (
                <svg xmlns="http://w3.org" className="h-6 w-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            ),
            title: "Around-the-Clock Support",
            description: "Whether you need a late check-in change or payment support, our 24/7 rustic concierge team is one click away."
        }
    ];

    return (
        <section className="bg-emerald-950 py-16 px-4 sm:px-6 lg:py-24 lg:px-8 border-t border-emerald-900/50">
            <div className="max-w-6xl mx-auto">
                
                {/* Header Information Element */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-teal-400 text-xs font-bold uppercase tracking-widest block mb-2">
                        The LodgeLink Difference
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-none mb-4">
                        Why Thousands Trust Our Stays
                    </h2>
                    <p className="text-stone-300 text-sm sm:text-base font-medium">
                        We bridge the digital gap between premium eco-lodges and passionate travelers seeking seamless nature escapes.
                    </p>
                </div>

                {/* Core Features Grid Array */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((item, idx) => (
                        <div 
                            key={idx} 
                            className="bg-emerald-900/40 border border-emerald-800/40 rounded-2xl p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-900/60 hover:border-emerald-700/50 group"
                        >
                            {/* Animated Icon Wrapper Box */}
                            <div className="w-12 h-12 bg-emerald-950 rounded-xl flex items-center justify-center mb-5 border border-emerald-800 shadow-inner group-hover:scale-110 transition-transform duration-300">
                                {item.icon}
                            </div>
                            
                            {/* Descriptive Labels */}
                            <h3 className="text-lg font-bold text-white mb-2 tracking-tight group-hover:text-teal-300 transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-stone-400 text-sm leading-relaxed font-medium">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ChooseUsSection;