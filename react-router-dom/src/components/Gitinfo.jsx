import React, { useState } from "react";

function Gitinfo() {
  const [data, setData] = useState(null);
  const [name, SetName] = useState("");

  const fetchdata = () => {
    if (!name) return;

    fetch(`https://api.github.com/users/${name}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((error) => {
        console.error("Failed to load user data:", error);
      });
  };

  return (
    <div className="py-24 bg-white min-h-screen flex flex-col items-center justify-center px-4">
      
      {/* Search Input & Button Bar */}
      <div className="max-w-5xl w-full mb-10 flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          value={name}
          onChange={(e) => SetName(e.target.value)}
          placeholder="ENTER GITHUB USERNAME"
          className="flex-1 py-4 px-6 bg-gray-50 border-4 border-gray-900 text-gray-900 font-bold uppercase tracking-wider placeholder-gray-400 focus:outline-none focus:bg-white focus:shadow-[6px_6px_0_0_rgba(249,115,22,1)] focus:-translate-y-1 focus:-translate-x-1 transition-all duration-150"
        />

        <button 
          onClick={fetchdata}
          className="bg-gray-900 text-white font-bold uppercase tracking-widest px-10 py-4 border-4 border-gray-900 shadow-[6px_6px_0_0_rgba(249,115,22,1)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[4px_4px_0_0_rgba(249,115,22,1)] active:translate-y-[6px] active:translate-x-[6px] active:shadow-none transition-all duration-150"
        >
          Search
        </button>
      </div>

      {/* Main Poster Block - Only visible if data exists */}
      {data && (
        <div className="max-w-5xl w-full bg-white border-4 border-gray-900 shadow-[16px_16px_0_0_rgba(17,24,39,1)] flex flex-col md:flex-row relative">
          
          {/* Decorative Tape Element */}
          <div className="absolute -top-6 left-8 bg-orange-500 text-white font-bold uppercase tracking-widest text-sm px-6 py-2 border-2 border-gray-900 shadow-[4px_4px_0_0_rgba(17,24,39,1)] -rotate-2 z-10">
            Git Info
          </div>

          {/* Left Side: Avatar & Followers */}
          <div className="w-full md:w-5/12 border-b-4 md:border-b-0 md:border-r-4 border-gray-900 bg-orange-100 flex flex-col">
            
            {/* Avatar Container */}
            <div className="p-8 flex justify-center border-b-4 border-gray-900">
              <div className="w-56 h-56 bg-white border-4 border-gray-900 shadow-[8px_8px_0_0_rgba(17,24,39,1)] hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[16px_16px_0_0_rgba(17,24,39,1)] transition-all duration-300">
                <img
                  src={data?.avatar_url}
                  alt={data ? `${data.login} avatar` : "Loading avatar"}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>

            {/* Followers Banner */}
            <div className="flex-1 flex flex-col justify-center items-center p-8 bg-orange-500 text-white">
              <h2 className="text-xl font-bold uppercase tracking-widest mb-2 border-b-2 border-gray-900 pb-1">
                followers : {data?.followers ?? 0}
              </h2>
            </div>
          </div>

          {/* Right Side: Username & Bio */}
          <div className="w-full md:w-7/12 p-8 md:p-12 flex flex-col justify-center bg-white">
            
            <h1 className="text-4xl md:text-6xl text-gray-900 font-black uppercase tracking-tight leading-none mb-8 break-words">
              username: {data?.login}
            </h1>

            <div className="border-l-8 border-gray-900 pl-6">
              <h2 className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed">
                bio: {data?.bio ? data.bio : "No bio provided."}
              </h2>
            </div>

          </div>

        </div>
      )}

    </div>
  );
}

export default Gitinfo;