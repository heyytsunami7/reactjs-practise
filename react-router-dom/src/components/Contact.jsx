import React from "react";
import { Link } from "react-router-dom";

export default function Contact() {
    return (
        <div className="py-20 bg-white min-h-screen flex items-center justify-center">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                
                {/* Main Brutalist Container Box */}
                <div className="flex flex-col md:flex-row border-4 border-gray-900 shadow-[12px_12px_0_0_rgba(17,24,39,1)] bg-white relative">
                    
                    {/* Decorative Tape Element */}
                    <div className="absolute -top-4 -left-4 bg-orange-500 text-white font-bold uppercase tracking-widest text-xs px-4 py-2 border-2 border-gray-900 shadow-[4px_4px_0_0_rgba(17,24,39,1)] -rotate-3 z-10">
                        Say Hello
                    </div>

                    {/* Left Side: Contact Information */}
                    <div className="w-full md:w-1/2 p-8 md:p-16 bg-orange-100 border-b-4 md:border-b-0 md:border-r-4 border-gray-900 flex flex-col justify-center">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl text-gray-900 font-black uppercase tracking-tight leading-none">
                            Get in <span className="text-white text-stroke">touch</span>
                            {/* Note: to get the text-stroke effect, you can add a custom utility or just use an underline */}
                            <div className="h-2 bg-gray-900 w-24 mt-4 mb-6"></div>
                        </h1>
                        
                        <p className="text-lg font-bold text-gray-700 mb-8 uppercase tracking-wide">
                            Fill in the form to start a conversation.
                        </p>

                        <div className="space-y-6">
                            {/* Contact Item */}
                            <div className="flex items-center group">
                                <div className="p-3 bg-white border-2 border-gray-900 shadow-[4px_4px_0_0_rgba(17,24,39,1)] group-hover:-translate-y-1 group-hover:shadow-[6px_6px_0_0_rgba(249,115,22,1)] transition-all duration-200">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6 text-gray-900">
                                        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div className="ml-6 text-md tracking-wide font-bold text-gray-900 uppercase">
                                    Acme Inc, Street, State, Postal Code
                                </div>
                            </div>

                            {/* Contact Item */}
                            <div className="flex items-center group">
                                <div className="p-3 bg-white border-2 border-gray-900 shadow-[4px_4px_0_0_rgba(17,24,39,1)] group-hover:-translate-y-1 group-hover:shadow-[6px_6px_0_0_rgba(249,115,22,1)] transition-all duration-200">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6 text-gray-900">
                                        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div className="ml-6 text-md tracking-wide font-bold text-gray-900 uppercase">
                                    +44 1234567890
                                </div>
                            </div>

                            {/* Contact Item */}
                            <div className="flex items-center group">
                                <div className="p-3 bg-white border-2 border-gray-900 shadow-[4px_4px_0_0_rgba(17,24,39,1)] group-hover:-translate-y-1 group-hover:shadow-[6px_6px_0_0_rgba(249,115,22,1)] transition-all duration-200">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6 text-gray-900">
                                        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div className="ml-6 text-md tracking-wide font-bold text-gray-900 uppercase">
                                    info@acme.org
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <form className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center bg-white">
                        <div className="flex flex-col mb-6">
                            {/* Un-hid the labels and made them brutalist */}
                            <label htmlFor="name" className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-2">
                                Full Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="JANE DOE"
                                className="w-full py-3 px-4 bg-gray-50 border-2 border-gray-900 text-gray-900 font-bold placeholder-gray-400 focus:outline-none focus:bg-white focus:shadow-[4px_4px_0_0_rgba(249,115,22,1)] focus:-translate-y-1 focus:-translate-x-1 transition-all duration-150"
                            />
                        </div>

                        <div className="flex flex-col mb-6">
                            <label htmlFor="email" className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="HELLO@EXAMPLE.COM"
                                className="w-full py-3 px-4 bg-gray-50 border-2 border-gray-900 text-gray-900 font-bold placeholder-gray-400 focus:outline-none focus:bg-white focus:shadow-[4px_4px_0_0_rgba(249,115,22,1)] focus:-translate-y-1 focus:-translate-x-1 transition-all duration-150"
                            />
                        </div>

                        <div className="flex flex-col mb-8">
                            <label htmlFor="tel" className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-2">
                                Telephone Number
                            </label>
                            <input
                                type="tel"
                                name="tel"
                                id="tel"
                                placeholder="+1 (555) 000-0000"
                                className="w-full py-3 px-4 bg-gray-50 border-2 border-gray-900 text-gray-900 font-bold placeholder-gray-400 focus:outline-none focus:bg-white focus:shadow-[4px_4px_0_0_rgba(249,115,22,1)] focus:-translate-y-1 focus:-translate-x-1 transition-all duration-150"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full md:w-auto self-start bg-gray-900 text-white font-bold uppercase tracking-widest px-10 py-4 border-2 border-gray-900 shadow-[6px_6px_0_0_rgba(249,115,22,1)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[4px_4px_0_0_rgba(249,115,22,1)] active:translate-y-[6px] active:translate-x-[6px] active:shadow-none transition-all duration-150"
                        >
                            Submit
                        </button>
                    </form>

                </div>
            </div>
        </div>
    );
}