import React from 'react';

const Loading = () => {
    return (
        <div className="min-h-[80vh] w-full bg-emerald-950 flex flex-col items-center justify-center p-4">
            <div className="flex flex-col items-center gap-4 text-center">
                {/* daisyUI infinite spinner container */}
                <div className="w-16 h-16 border-4 border-emerald-800 border-t-teal-400 rounded-full animate-spin"></div>
                
                <div>
                    <h2 className="text-xl font-bold text-white tracking-tight">
                        Loading LodgeLink...
                    </h2>
                    <p className="text-stone-400 text-xs mt-1 font-medium tracking-wide">
                        Finding your perfect off-grid stay
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Loading;
