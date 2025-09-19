"use client";

import React, { useState, KeyboardEvent } from "react";
import { Icon } from "@iconify/react";
import clsx from "clsx";

type SearchBarProps = {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onSearch?: (value: string) => void;
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  className?: string;
};

const sizeClasses = {
  sm: "h-8 text-sm px-3",
  md: "h-10 text-[14px] px-4",
  lg: "h-12 text-lg px-5",
};

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = "Search...",
  value,
  onChange,
  onSearch,
  size = "md",
  disabled = false,
  className,
}) => {
  const [internalValue, setInternalValue] = useState("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setInternalValue(val);
    onChange?.(val);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch?.(value ?? internalValue);
    }
  };

  const triggerSearch = () => {
    onSearch?.(value ?? internalValue);
  };

  return (
    <div
      className={clsx(
        "flex items-center rounded-full border border-[#f5f5f580] transition-all", // ✅ chỉnh màu border
        disabled
          ? "opacity-50 cursor-not-allowed"
          : "focus-within:ring-2 focus-within:ring-primary100",
        sizeClasses[size],
        className
      )}
    >
      <input
        type="text"
        placeholder={placeholder}
        value={value ?? internalValue}
        onChange={handleInput}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        className={clsx(
          "flex-1 bg-transparent outline-none placeholder-[#F5F5F580] font-light text-[#F5F5F580]"
        )}
      />
      <button
        type="button"
        onClick={triggerSearch}
        disabled={disabled}
        className="ml-2 transition-colors"
      >
        <Icon
          icon="lets-icons:search-light"
          width="20"
          height="20"
          className="text-[#F5F5F580]"
        />
      </button>
    </div>
  );
};

export default SearchBar;
