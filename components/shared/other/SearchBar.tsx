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
  inputClassName?: string;
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
  inputClassName,
}) => {
  const [internalValue, setInternalValue] = useState("");

  const inputValue = value ?? internalValue;

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setInternalValue(val);
    onChange?.(val);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch?.(inputValue);
    }
  };

  const triggerSearch = () => {
    onSearch?.(inputValue);
  };

  return (
    <div
      className={clsx(
        "flex items-center rounded-full border transition-all",
        disabled
          ? "opacity-50 cursor-not-allowed"
          : "focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-300",
        sizeClasses[size],
        className
      )}
    >
      <input
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInput}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        className={clsx(
          "flex-1 bg-transparent outline-none font-light",
          inputClassName
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
          className={inputClassName}
        />
      </button>
    </div>
  );
};

export default SearchBar;
