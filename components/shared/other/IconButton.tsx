"use client";

import clsx from "clsx";
import React from "react";

type IconButtonProps = {
  svg: string;
  size?: number;
  // color?: string;
  gradient?: boolean;
  onClick?: () => void;
  className?: string;
};

const IconButton: React.FC<IconButtonProps> = ({
  svg,
  size = 24,
  // color = "currentColor",
  gradient = false,
  onClick,
  className,
}) => {
  const gradientId = "icon-gradient";

  return (
    <button
      onClick={onClick}
      className={clsx(
        "flex items-center justify-center py-2 px-2 rounded-full bg-light200_dark600 transition-all duration-300 group",
        className
      )}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        className={clsx(
          "transition-transform duration-300 group-hover:scale-110",
          !gradient && "text-[#686868] dark:text-[#f5f5f580]" // màu chưa active
        )}
      >
        {gradient && (
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffcb67" />
              <stop offset="30%" stopColor="#ed5409" />
              <stop offset="70%" stopColor="#506179" />
              <stop offset="100%" stopColor="#214e81" />
            </linearGradient>
          </defs>
        )}
        <path
          d={svg}
          fill={gradient ? `url(#${gradientId})` : "currentColor"}
        />
      </svg>
    </button>
  );
};

export default IconButton;
