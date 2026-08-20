export default function Card() {
    return (
        <div className="group w-full max-w-sm bg-[#F7F5F0] rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-[#EAE6DF] dark:bg-[#161618] dark:border-[#2C2C2E]">
            {/* Image Container with subtle dark mode overlay */}
            <div className="relative overflow-hidden aspect-4/3">
                <a href="/">
                    <img 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                        src="https://i.pinimg.com/1200x/f6/9a/e2/f69ae2ba408ed443d4b413901d4d3a60.jpg" 
                        alt="Batman product artwork" 
                    />
                </a>
                {/* Dims the image slightly in dark mode so it isn't blindingly bright against the dark card */}
                <div className="absolute inset-0 bg-black/0 dark:bg-black/20 pointer-events-none transition-colors duration-300" />
            </div>

            <div className="p-6 flex flex-col h-full">
                <a href="/">
                    <h5 className="text-xl font-extrabold tracking-tight text-[#2D2B2A] dark:text-[#EAE8E4] mb-2 line-clamp-2 transition-colors duration-300 group-hover:text-[#E24A22]">
                        Batman, men are brave, procrastination killing me
                    </h5>
                </a>

                {/* Rating Section - Warmer Gold tones */}
                <div className="flex items-center gap-1 mt-2 mb-6">
                    {[1, 2, 3, 4].map((star) => (
                        <svg key={star} className="w-4 h-4 text-[#E5A93D]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                    ))}
                    <svg className="w-4 h-4 text-[#D4CEC6] dark:text-[#38383A]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <span className="bg-[#EAE6DF] text-[#635E5A] text-xs font-bold px-2.5 py-1 rounded-md dark:bg-[#252528] dark:text-[#9A9690] ml-2">
                        4.0
                    </span>
                </div>

                {/* Price and Action Section */}
                <div className="flex items-end justify-between mt-auto">
                    <div className="flex flex-col">
                        <span className="text-sm font-medium text-[#8C8782] dark:text-[#686663] line-through mb-0.5">$799</span>
                        <span className="text-3xl font-black text-[#161618] dark:text-[#F7F5F0] tracking-tight leading-none">$599</span>
                    </div>
                    {/* Terracotta/Rust Gradient Button */}
                    <button className="text-white bg-linear-to-r from-[#E24A22] to-[#F47C3B] hover:from-[#D13C16] hover:to-[#E56B2A] shadow-lg shadow-[#E24A22]/20 hover:shadow-[#E24A22]/40 hover:-translate-y-0.5 transition-all duration-300 font-bold rounded-xl text-sm px-6 py-2.5 dark:shadow-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E24A22] dark:focus:ring-offset-[#161618]">
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
}