"use client";

import React from "react";

const Page = () => {
  return (
    <div className="absolute inset-0 pointer-events-auto opacity-90 bg-primary">
      <div className="relative z-10 flex items-center justify-center h-screen">
        <div className="flex gap-3">
          <button className="relative px-6 py-2 rounded-full text-white font-medium bg-black overflow-hidden">
            <span className="relative z-10">Add Sonic ↗</span>
            <span className="absolute inset-0 rounded-full p-[2px] border-glow animate-gradient-x">
              <span className="block h-full w-full rounded-full bg-black"></span>
            </span>
          </button>

          <button
            className="relative px-6 py-2 rounded-full text-white p-[2px] border-glow animate-gradient-x
             transition duration-300 hover:shadow-[0_0_16px_rgba(255,120,40,0.6)] hover:scale-[1.02]"
          >
            <span className="relative z-10">Add Sonic ↗</span>

            <span className="absolute inset-0 rounded-full p-[2px] border-glow animate-gradient-x">
              <span className="block h-full w-full rounded-full bg-black"></span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
