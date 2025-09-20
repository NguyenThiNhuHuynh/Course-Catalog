"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Theme from "../theme/Theme";
import Image from "next/image";
import SearchBar from "../other/SearchBar";
import { Icon } from "@iconify/react";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const NavItem = ({ href, label }: { href: string; label: string }) => {
    const isActive = pathname === href;

    return (
      <Link
        href={href}
        onClick={() => setMenuOpen(false)}
        className={clsx(
          "relative px-1 transition-all duration-300 jost text-[15px] group",
          isActive
            ? "font-semibold text-white"
            : "text-[#f5f5f5]/50 hover:text-white"
        )}
      >
        {label}
        <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient rounded-full transition-all duration-500 group-hover:w-full" />
      </Link>
    );
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navbar h-[72px] flex items-center justify-between px-4 shadow-md">
      <Link href="/" className="flex items-center">
        <p className="text-[26px] font-light text-white jost">
          Course Catalog.
        </p>
      </Link>
      <div className="flex flex-row gap-10">
        <div className="hidden md:flex items-center gap-[50px]">
          <nav className="hidden md:flex items-center gap-8 text-white">
            <NavItem href="/" label="Home" />
            <NavItem href="/course" label="Courses" />
          </nav>

          <div className="hidden lg:block w-[280px]">
            <SearchBar
              placeholder="I’m looking for..."
              size="md"
              className="border-[#f5f5f580]"
              inputClassName="text-[#f5f5f580]"
              onSearch={(val) => console.log("Searching:", val)}
            />
          </div>
        </div>

        <div className="flex flex-row items-center space-x-4">
          <Theme />

          <div className="flex justify-center items-center space-x-2">
            <div className="w-9 h-9 rounded-full overflow-hidden border border-gray-500 hover:scale-105 transition-transform duration-300">
              <Image
                src="https://i.pinimg.com/1200x/02/2b/ea/022bea750a95e211c2dd098a1b0db88d.jpg"
                alt="User Avatar"
                className="w-full h-full object-cover"
                width={36}
                height={36}
              />
            </div>
            <Icon
              icon="mdi:chevron-down"
              width="18"
              height="18"
              className="text-muted-foreground hover:text-white"
            />
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none md:hidden"
          >
            <Icon
              icon={menuOpen ? "mdi:close" : "mdi:menu"}
              width="28"
              height="28"
            />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="absolute top-[72px] left-0 w-full bg-navbar flex flex-col items-start px-6 py-4 gap-4 md:hidden shadow-lg">
          <NavItem href="/" label="Home" />
          <NavItem href="/course" label="Courses" />
        </div>
      )}
    </header>
  );
};

export default Navbar;
