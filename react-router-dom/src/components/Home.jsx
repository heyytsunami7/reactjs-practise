import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl pt-10 pb-20">
            
            {/* Hero Section - Brutalist Split Panel Box */}
            <aside className="border-4 border-gray-900 shadow-[12px_12px_0_0_rgba(17,24,39,1)] bg-white mx-4 sm:mx-16 flex flex-col md:flex-row items-stretch transition-all hover:shadow-[16px_16px_0_0_rgba(17,24,39,1)]">
                
                {/* Left Side: Text & Button */}
                <div className="p-8 md:p-16 flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left z-10">
                    <h2 className="text-4xl md:text-6xl text-gray-900 font-black uppercase tracking-tight leading-none mb-8">
                        Download Now
                        <br />
                        {/* Highlighted text block with a slight tilt for that raw, poster-like feel */}
                        <span className="inline-block mt-3 bg-orange-500 text-white px-4 py-2 border-2 border-gray-900 -rotate-2 shadow-[4px_4px_0_0_rgba(17,24,39,1)]">
                            Lorem Ipsum
                        </span>
                    </h2>

                    {/* Brutalist Button */}
                    <Link
                        className="inline-flex items-center text-white bg-gray-900 font-bold uppercase tracking-wide px-8 py-4 border-2 border-gray-900 shadow-[6px_6px_0_0_rgba(249,115,22,1)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[4px_4px_0_0_rgba(249,115,22,1)] active:translate-y-[6px] active:translate-x-[6px] active:shadow-none transition-all duration-150"
                        to="/"
                    >
                        <svg
                            fill="white"
                            width="24"
                            height="24"
                            xmlns="http://www.w3.org/2000/svg"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            className="mr-3"
                        >
                            <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                        </svg>
                        Download now
                    </Link>
                </div>

                {/* Right Side: Image Canvas */}
                <div className="flex-1 w-full bg-orange-100 border-t-4 md:border-t-0 md:border-l-4 border-gray-900 flex justify-center items-end pt-12 md:pt-20 overflow-hidden relative">
                    {/* Background grid pattern for a technical look */}
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#111827 2px, transparent 2px)', backgroundSize: '24px 24px' }}></div>
                    <img 
                        className="w-72 md:w-96 relative z-10 drop-shadow-[8px_8px_0_rgba(17,24,39,1)] hover:scale-105 transition-transform duration-300" 
                        src="https://i.ibb.co/5BCcDYB/Remote2.png" 
                        alt="Mobile app preview" 
                    />
                </div>
            </aside>

            {/* Secondary Image Section */}
            <div className="mt-32 grid place-items-center relative group z-0">
                {/* Offset decorative box behind the image */}
                <div className="absolute w-64 md:w-96 h-full bg-orange-500 border-4 border-gray-900 translate-x-6 translate-y-6 -z-10 group-hover:translate-x-8 group-hover:translate-y-8 transition-transform duration-300"></div>
                
                <img 
                    className="w-64 md:w-96 bg-white p-6 border-4 border-gray-900 transition-transform duration-300 group-hover:-translate-y-2 group-hover:-translate-x-2" 
                    src="https://i.ibb.co/2M7rtLk/Remote1.png" 
                    alt="Feature illustration" 
                />
            </div>

            {/* Footer Banner Heading */}
            <div className="mt-32 border-y-4 border-gray-900 bg-orange-100 overflow-hidden">
                <h1 className="text-center text-3xl sm:text-5xl md:text-7xl py-12 text-gray-900 font-black uppercase tracking-widest whitespace-nowrap px-4 hover:tracking-[0.25em] transition-all duration-500">
                    Lorem Ipsum Yojo
                </h1>
            </div>
            
        </div>
    );
}