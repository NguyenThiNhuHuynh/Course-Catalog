"use client";

import React from "react";

const Page = () => {
  return (
    <div className="absolute inset-0 pointer-events-auto opacity-90 bg-primary">
      <div className="relative z-10 flex items-center justify-center h-screen">
        <div className="flex gap-3">
          <button
            className="
    relative inline-flex items-center justify-center
    rounded-full font-bold text-white
    bg-gradient-sonic
    p-[2px]
  "
          >
            <span
              className="
      px-6 py-1.5 rounded-full
      bg-[#141416]/80 flex items-center justify-center
    "
            >
              Connect Wallet
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
