"use client";

import { Icon } from "@iconify/react";
import clsx from "clsx";
import React from "react";

type IconButtonProps = {
  icon: string;
  size?: number;
  onClick?: () => void;
  className?: string;
};

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  size = 24,
  onClick,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "flex items-center justify-center py-2 px-2 rounded-full bg-light200_dark600 transition-all duration-300 group",
        className
      )}
    >
      <Icon
        icon={icon}
        width={size}
        height={size}
        className="text-dark300_light600 transition-transform duration-300 group-hover:scale-110"
      />
    </button>
  );
};

export default IconButton;
