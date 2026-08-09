import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        // Heavy top border to separate the footer structurally
        <footer className="bg-white border-t-4 border-gray-900 pt-16 pb-8">
            <div className="mx-auto w-full max-w-screen-xl px-4 lg:px-8">
                
                <div className="md:flex md:justify-between items-start">
                    
                    {/* Logo Section */}
                    <div className="mb-12 md:mb-0">
                        <Link to="/" className="inline-block group">
                            {/* Brutalist Logo Box */}
                            <div className="border-4 border-gray-900 bg-orange-100 p-3 shadow-[6px_6px_0_0_rgba(17,24,39,1)] group-hover:-translate-y-1 group-hover:-translate-x-1 group-hover:shadow-[10px_10px_0_0_rgba(249,115,22,1)] transition-all duration-300">
                                <img
                                    src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                                    className="h-12 md:h-16 grayscale group-hover:grayscale-0 transition-all duration-500"
                                    alt="Logo"
                                />
                            </div>
                        </Link>
                    </div>

                    {/* Links Section */}
                    <div className="grid grid-cols-2 gap-8 sm:gap-12 sm:grid-cols-3">
                        <div>
                            {/* Thick underline for headers */}
                            <h2 className="mb-6 text-lg font-black text-gray-900 uppercase tracking-widest border-b-4 border-orange-500 inline-block pr-4 pb-1">
                                Resources
                            </h2>
                            <ul className="text-gray-700 font-bold uppercase tracking-wider text-sm flex flex-col items-start gap-3">
                                <li>
                                    <Link to="/" className="hover:bg-gray-900 hover:text-white px-2 py-1 -ml-2 transition-colors duration-150">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="hover:bg-gray-900 hover:text-white px-2 py-1 -ml-2 transition-colors duration-150">
                                        About
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        
                        <div>
                            <h2 className="mb-6 text-lg font-black text-gray-900 uppercase tracking-widest border-b-4 border-orange-500 inline-block pr-4 pb-1">
                                Follow us
                            </h2>
                            <ul className="text-gray-700 font-bold uppercase tracking-wider text-sm flex flex-col items-start gap-3">
                                <li>
                                    <a
                                        href="https://github.com/hiteshchoudhary"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="hover:bg-gray-900 hover:text-white px-2 py-1 -ml-2 transition-colors duration-150"
                                    >
                                        Github
                                    </a>
                                </li>
                                <li>
                                    <Link to="/" className="hover:bg-gray-900 hover:text-white px-2 py-1 -ml-2 transition-colors duration-150">
                                        Discord
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        
                        <div>
                            <h2 className="mb-6 text-lg font-black text-gray-900 uppercase tracking-widest border-b-4 border-orange-500 inline-block pr-4 pb-1">
                                Legal
                            </h2>
                            <ul className="text-gray-700 font-bold uppercase tracking-wider text-sm flex flex-col items-start gap-3">
                                <li>
                                    <Link to="#" className="hover:bg-gray-900 hover:text-white px-2 py-1 -ml-2 transition-colors duration-150">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:bg-gray-900 hover:text-white px-2 py-1 -ml-2 transition-colors duration-150">
                                        Terms & Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Brutalist Thick Divider */}
                <hr className="my-10 border-t-4 border-gray-900" />

                <div className="sm:flex sm:items-center sm:justify-between">
                    
                    {/* Copyright */}
                    <span className="text-sm font-bold text-gray-900 uppercase tracking-wider sm:text-center">
                        © 2026{" "}
                        <a href="https://github.com/heyytsunami7" className="text-orange-600 hover:text-gray-900 hover:underline decoration-2 underline-offset-4">
                            Saksham Rana
                        </a>
                        . All Rights Reserved.
                    </span>

                    {/* Social Icons inside Mechanical Buttons */}
                    <div className="flex mt-6 space-x-4 sm:justify-center sm:mt-0">
                        <Link 
                            to="#" 
                            className="text-gray-900 bg-white border-2 border-gray-900 p-2 shadow-[4px_4px_0_0_rgba(249,115,22,1)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0_0_rgba(249,115,22,1)] active:translate-y-[4px] active:translate-x-[4px] active:shadow-none transition-all duration-150"
                        >
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd" />
                            </svg>
                            <span className="sr-only">Facebook page</span>
                        </Link>
                        
                        <Link 
                            to="#" 
                            className="text-gray-900 bg-white border-2 border-gray-900 p-2 shadow-[4px_4px_0_0_rgba(249,115,22,1)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0_0_rgba(249,115,22,1)] active:translate-y-[4px] active:translate-x-[4px] active:shadow-none transition-all duration-150"
                        >
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                            </svg>
                            <span className="sr-only">Discord community</span>
                        </Link>
                        
                        <Link 
                            to="#" 
                            className="text-gray-900 bg-white border-2 border-gray-900 p-2 shadow-[4px_4px_0_0_rgba(249,115,22,1)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0_0_rgba(249,115,22,1)] active:translate-y-[4px] active:translate-x-[4px] active:shadow-none transition-all duration-150"
                        >
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                                <path fillRule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clipRule="evenodd" />
                            </svg>
                            <span className="sr-only">Twitter page</span>
                        </Link>
                        
                        <Link 
                            to="#" 
                            className="text-gray-900 bg-white border-2 border-gray-900 p-2 shadow-[4px_4px_0_0_rgba(249,115,22,1)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0_0_rgba(249,115,22,1)] active:translate-y-[4px] active:translate-x-[4px] active:shadow-none transition-all duration-150"
                        >
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd" />
                            </svg>
                            <span className="sr-only">GitHub account</span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}