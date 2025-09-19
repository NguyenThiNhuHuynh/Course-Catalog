"use client";

import Navbar from "@/components/shared/navbar/Navbar";
import React from "react";
import clsx from "clsx";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className=" relative min-h-screen flex flex-col">
      <Navbar />

      <div
        className={clsx(
          "flex-1 flex flex-col overflow-y-auto transition-[padding] duration-300",
          "pt-16"
        )}
      >
        <section className="flex-1 flex flex-col">
          <div className=" mx-auto size-full">{children}</div>
        </section>
      </div>
    </main>
  );
};

export default Layout;
