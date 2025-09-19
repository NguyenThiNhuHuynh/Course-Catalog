"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Theme from "../theme/Theme";
import Image from "next/image";
import SearchBar from "../other/SearchBar";

const Navbar: React.FC = () => {
  const pathname = usePathname();

  const NavItem = ({ href, label }: { href: string; label: string }) => {
    const isActive = pathname === href;

    return (
      <Link
        href={href}
        className={clsx(
          "relative px-1 transition-all duration-300 jost text-[15px] group",
          isActive
            ? "font-semibold text-white"
            : "text-[#f5f5f5]/50 hover:text-white"
        )}
      >
        {label}
        <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-sonic-mirrored rounded-full transition-all duration-500 group-hover:w-full" />
      </Link>
    );
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[72px] bg-100 flex items-center justify-between px-4 shadow-md">
      <Link href="/" className="flex items-center">
        <p className="text-[26px] font-light text-white jost">
          Course Catalog.
        </p>
      </Link>

      <div className="flex items-center gap-[50px]">
        <nav className="hidden md:flex items-center gap-8 text-white">
          <NavItem href="/" label="Home" />
          <NavItem href="/course" label="Courses" />
        </nav>

        <div className="hidden md:block w-[280px]">
          <SearchBar
            placeholder="I’m looking for..."
            size="md"
            onSearch={(val) => console.log("Searching:", val)}
          />
        </div>

        <Theme />

        <div className="w-9 h-9 rounded-full overflow-hidden border border-gray-500 hover:scale-105 transition-transform duration-300">
          <Image
            src="https://i.pinimg.com/1200x/02/2b/ea/022bea750a95e211c2dd098a1b0db88d.jpg"
            alt="User Avatar"
            className="w-full h-full object-cover"
            width={40}
            height={40}
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
