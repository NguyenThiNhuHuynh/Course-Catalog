"use client";

import Navbar from "@/components/shared/navbar/Navbar";
import React, { useState } from "react";
import clsx from "clsx";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <main className=" relative min-h-screen flex flex-col">
      <Navbar
        isMobileOpen={mobileOpen}
        onCloseMobile={() => setMobileOpen(false)}
      />

      <div
        className={clsx(
          "flex-1 flex flex-col overflow-y-auto transition-[padding] duration-300",
          "pt-16"
        )}
      >
        <section className=" flex-1 flex flex-col">
          <div className=" mx-auto size-full p-6">{children}</div>
        </section>
      </div>
    </main>
  );
};

export default Layout;
