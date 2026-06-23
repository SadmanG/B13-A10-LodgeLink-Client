"use client";

import React from 'react';
import { 
    LineChart, 
    Line, 
    XAxis, 
    YAxis, 
    CartesianGrid, 
    Tooltip, 
    ResponsiveContainer 
} from 'recharts';

const OwnerEarningChart = () => {
    // Trailing revenue matrix reflecting successful booking payments
    const chartData = [
        { month: 'Jul', earnings: 1200 },
        { month: 'Aug', earnings: 1850 },
        { month: 'Sep', earnings: 2200 },
        { month: 'Oct', earnings: 1900 },
        { month: 'Nov', earnings: 2400 },
        { month: 'Dec', earnings: 3400 }, 
        { month: 'Jan', earnings: 2100 },
        { month: 'Feb', border: 2800, earnings: 2800 },
        { month: 'Mar', earnings: 3100 },
        { month: 'Apr', earnings: 2900 },
        { month: 'May', earnings: 3800 },
        { month: 'Jun', earnings: 4250 }
    ];

    return (
        <div className="w-full bg-emerald-900/30 border border-emerald-800/50 rounded-2xl p-6 shadow-xl mt-6">
            {/* Header Element */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-2">
                <div>
                    <h3 className="text-lg font-bold text-white tracking-tight">Earnings Analytics</h3>
                    <p className="text-xs text-stone-400 font-medium">Monthly revenue progression for the last 12 trailing months</p>
                </div>
                <div className="flex items-center gap-1.5 self-start sm:self-auto bg-emerald-950 px-3 py-1.5 rounded-lg border border-emerald-800 text-xs text-stone-300 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-teal-400 block animate-pulse"></span>
                    Total Successful Payments
                </div>
            </div>

            {/* Recharts Container Wrapper */}
            <div className="w-full h-80">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        data={chartData}
                        margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" stroke="#065f46" opacity={0.2} vertical={false} />
                        
                        <XAxis 
                            dataKey="month" 
                            stroke="#a8a29e" 
                            fontSize={12} 
                            tickLine={false} 
                            axisLine={false} 
                            dy={10}
                        />
                        
                        <YAxis 
                            stroke="#a8a29e" 
                            fontSize={12} 
                            tickLine={false} 
                            axisLine={false}
                            tickFormatter={(value) => `$${value}`}
                        />
                        
                        {/* BYPASSED OPTION: Inline styled native tooltip that guarantees no runtime errors */}
                        <Tooltip 
                            contentStyle={{ 
                                backgroundColor: '#022c22', // bg-emerald-950
                                border: '1px solid #047857', // border-emerald-700
                                borderRadius: '12px',
                                color: '#fff'
                            }}
                            itemStyle={{ color: '#2dd4bf', fontWeight: 'bold' }} // Tech Teal values
                            labelStyle={{ color: '#a8a29e', fontSize: '11px', textTransform: 'uppercase' }}
                            formatter={(value) => [`$${value.toLocaleString()}`, 'Earnings']}
                            cursor={{ stroke: '#0d9488', strokeWidth: 1, strokeDasharray: '4 4' }} 
                        />
                        
                        <Line
                            type="monotone" 
                            dataKey="earnings"
                            stroke="#2dd4bf" 
                            strokeWidth={3}
                            dot={{ fill: '#047857', stroke: '#2dd4bf', strokeWidth: 2, r: 4 }}
                            activeDot={{ fill: '#2dd4bf', stroke: '#022c22', strokeWidth: 3, r: 6 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default OwnerEarningChart;