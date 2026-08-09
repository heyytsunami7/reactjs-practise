import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
    return (
        // Detached container to maintain the modern floating layout
        <div className="fixed top-5 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50">
            
            {/* Main Header Box: Sharp edges, thick border, solid offset shadow */}
            <header className="bg-white border-2 border-gray-900 shadow-[6px_6px_0_0_rgba(17,24,39,1)] px-5 py-3 flex items-center justify-between transition-all duration-300">
                
                {/* Logo Section */}
                <Link to="/" className="flex items-center group">
                    <div className="p-1 border-2 border-transparent group-hover:border-gray-900 transition-colors">
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            // Minimalist snap animation rather than a smooth float
                            className="h-8 md:h-10 transition-transform duration-150 group-hover:scale-105"
                            alt="Logo"
                        />
                    </div>
                </Link>

                {/* Navigation Links - Centered */}
                <div className="hidden lg:flex items-center justify-center flex-1 mx-8">
                    <nav className="flex space-x-3">
                        {[
                            { name: "Home", path: "/" },
                            { name: "About us", path: "/about" },
                            { name: "Contact us", path: "/contact" },
                            { name: "Git Info", path: "/gitinfo" },
                        ].map((item) => (
                            <NavLink
                                key={item.name}
                                to={item.path}
                                className={({ isActive }) =>
                                    `px-5 py-2 text-sm font-bold uppercase tracking-wider transition-all duration-150 border-2 ${
                                        isActive
                                            ? "bg-gray-900 text-white border-gray-900 shadow-[3px_3px_0_0_rgba(249,115,22,1)]" // Orange shadow for active
                                            : "text-gray-700 border-transparent hover:border-gray-900 hover:shadow-[3px_3px_0_0_rgba(17,24,39,1)]"
                                    }`
                                }
                            >
                                {item.name}
                            </NavLink>
                        ))}
                    </nav>
                </div>

                {/* Call to Action Buttons */}
                <div className="flex items-center gap-3">
                    <Link
                        to="#"
                        className="hidden md:block text-gray-900 font-bold uppercase tracking-wide text-sm px-4 py-2 border-2 border-transparent hover:border-gray-900 hover:shadow-[3px_3px_0_0_rgba(17,24,39,1)] transition-all duration-150"
                    >
                        Log in
                    </Link>
                    <Link
                        to="#"
                        // The CTA button mimics a physical, clicky button
                        className="bg-orange-500 text-white font-bold uppercase tracking-wide text-sm px-6 py-2 border-2 border-gray-900 shadow-[4px_4px_0_0_rgba(17,24,39,1)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0_0_rgba(17,24,39,1)] active:translate-y-[4px] active:translate-x-[4px] active:shadow-none transition-all duration-150"
                    >
                        Get started
                    </Link>
                </div>
                
            </header>
        </div>
    );
}