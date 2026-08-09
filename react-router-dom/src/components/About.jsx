import React from "react";
import { Link } from "react-router-dom";

export default function About() {
    return (
        <div className="py-20 bg-white min-h-screen flex items-center">
            <div className="container mx-auto px-6 md:px-12 xl:px-24">
                <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center">
                    
                    {/* Image Section - Brutalist Box */}
                    <div className="w-full md:w-5/12 lg:w-1/2">
                        {/* Heavy border, offset shadow, and a hover translation effect */}
                        <div className="relative border-4 border-gray-900 shadow-[12px_12px_0_0_rgba(17,24,39,1)] transition-transform duration-300 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[16px_16px_0_0_rgba(17,24,39,1)] bg-orange-100">
                            <img
                                src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                                alt="Startup team"
                                // Grayscale effect that snaps to full color on hover
                                className="w-full h-auto object-cover border-b-4 border-gray-900 grayscale hover:grayscale-0 transition-all duration-500"
                            />
                            {/* Decorative brutalist 'tape/tag' */}
                            <div className="absolute -top-5 -right-5 bg-orange-500 text-white font-bold uppercase tracking-widest text-xs px-4 py-2 border-2 border-gray-900 shadow-[4px_4px_0_0_rgba(17,24,39,1)] rotate-3">
                                Innovate
                            </div>
                        </div>
                    </div>

                    {/* Text Section */}
                    <div className="w-full md:w-7/12 lg:w-1/2 flex flex-col items-start">
                        
                        {/* Brutalist Section Badge */}
                        <span className="bg-white text-gray-900 px-4 py-1.5 font-bold uppercase tracking-widest text-sm border-2 border-gray-900 shadow-[4px_4px_0_0_rgba(249,115,22,1)] mb-6 inline-block">
                            Who we are
                        </span>

                        <h2 className="text-3xl md:text-5xl lg:text-6xl text-gray-900 font-black uppercase tracking-tight leading-none mb-6">
                            React development by <span className="text-orange-500 underline decoration-gray-900 decoration-4 underline-offset-4">passionate</span> developers
                        </h2>
                        
                        {/* Boxy paragraph wrapper with a thick left border */}
                        <div className="border-l-4 border-gray-900 pl-6 mb-8 space-y-4">
                            <p className="text-lg text-gray-700 font-medium leading-relaxed">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
                                accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
                                aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
                            </p>
                            <p className="text-lg text-gray-700 font-medium leading-relaxed">
                                Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
                                Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
                            </p>
                        </div>

                        {/* Matching Call-to-Action Button */}
                        <Link
                            to="/contact"
                            className="bg-gray-900 text-white font-bold uppercase tracking-wide px-8 py-3 border-2 border-gray-900 shadow-[6px_6px_0_0_rgba(249,115,22,1)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[4px_4px_0_0_rgba(249,115,22,1)] active:translate-y-[6px] active:translate-x-[6px] active:shadow-none transition-all duration-150"
                        >
                            Join the team
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}