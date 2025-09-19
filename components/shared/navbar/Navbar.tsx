"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Theme from "../theme/Theme";
import { Icon } from "@iconify/react";

type NavbarProps = {
  isMobileOpen?: boolean;
  onCloseMobile?: () => void;
};

const Navbar: React.FC<NavbarProps> = ({
  isMobileOpen = false,
  onCloseMobile,
}) => {
  const pathname = usePathname();
  const isAsk = pathname === "/ask-fix" || pathname?.startsWith("/ask-fix/");

  const NavItem: React.FC<{
    href: string;
    icon: string;
    label: string;
    active?: boolean;
  }> = ({ href, icon, label, active }) => (
    <Link
      href={href}
      className={clsx(
        "px-3 py-2 rounded-lg transition-all duration-300 flex items-center gap-2",
        active
          ? "bg-primary-100 text-dark100_light100 font-medium"
          : "text-dark300_light300 hover:text-primary100"
      )}
      title={label}
      onClick={() => {
        onCloseMobile?.();
      }}
    >
      <Icon icon={icon} width="22" height="22" />
      <span className="hidden sm:inline">{label}</span>
    </Link>
  );

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 h-16 bg-100 flex items-center justify-between px-4 md:px-8"
      )}
    >
      {/* Logo */}
      <Link
        href="/"
        className="flex items-center gap-1"
        onClick={onCloseMobile}
      >
        <p className="text-dark100_light100 text-xl font-medium logo2">
          English<span className="text-primary100 logo">Mate</span>
        </p>
      </Link>

      {/* Nav Items */}
      <nav className="hidden md:flex items-center gap-6">
        <NavItem
          href="/"
          icon="solar:user-linear"
          label="Profile"
          active={pathname === "/"}
        />
        <NavItem
          href="/course"
          icon="material-symbols:post-outline-rounded"
          label="Ask Fix"
          active={isAsk}
        />
      </nav>

      <div className="flex items-center gap-4">
        <Theme />

        <button
          type="button"
          onClick={onCloseMobile}
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-dark300_light300 hover:text-primary100"
          aria-label="Menu"
          title="Menu"
        >
          <Icon icon="material-symbols:menu-rounded" width="24" height="24" />
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div
        className={clsx(
          "fixed inset-0 z-40 bg-black/40 transition-opacity md:hidden",
          isMobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
        onClick={onCloseMobile}
        aria-hidden="true"
      />

      {/* Mobile Nav Drawer */}
      <div
        className={clsx(
          "fixed top-16 left-0 right-0 z-50 background-light200_dark200 border-b border-light400_dark400 flex flex-col gap-2 px-4 py-3 transition-transform md:hidden",
          isMobileOpen ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <NavItem
          href="/"
          icon="solar:user-linear"
          label="Profile"
          active={pathname === "/"}
        />
        <NavItem
          href="/ask-fix"
          icon="material-symbols:post-outline-rounded"
          label="Ask Fix"
          active={isAsk}
        />
      </div>
    </header>
  );
};

export default Navbar;
