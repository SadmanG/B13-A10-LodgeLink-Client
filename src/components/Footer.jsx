import { FaInstagram, FaFacebookF, FaLinkedinIn  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import React from 'react';

const Footer = () => {
    return (
        <footer className="relative w-full bg-emerald-900 text-stone-100 pt-16 pb-8 px-10 font-sans">
            <div className="flex flex-col items-center text-center">
                {/* Main Branding */}
                <h2 className="text-6xl font-bold mb-4 tracking-tight flex text-green-400">LodgeLink</h2>

                {/* Slogan */}
                <p className="text-sm opacity-80 max-w-2xl mb-8">
                    Connecting spaces. Creating stays.
                </p>

                {/* Social Links Section */}
                <div className="flex flex-col items-center gap-4 mb-20">
                    <span className="text-sm font-medium tracking-wide">Social Links</span>
                    <div className="flex gap-4">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#1e3d31] cursor-pointer hover:bg-gray-200 transition-colors">
                            <FaInstagram size={20} />
                        </div>
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#1e3d31] cursor-pointer hover:bg-gray-200 transition-colors">
                            <FaFacebookF size={18} />
                        </div>
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#1e3d31] cursor-pointer hover:bg-gray-200 transition-colors">
                            <FaXTwitter size={18} />
                        </div>
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#1e3d31] cursor-pointer hover:bg-gray-200 transition-colors">
                            <FaLinkedinIn size={18} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Legal Row - Distributed to corners */}
            <div className="flex flex-col md:flex-row justify-between items-center w-full text-[11px] opacity-50 tracking-wider">
                <p>© 2026 LodgeLink. All rights reserved.</p>
                <div className="flex gap-10 mt-4 md:mt-0">
                    <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
                    <a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a>
                    <a href="#" className="hover:opacity-100 transition-opacity">Contact</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;