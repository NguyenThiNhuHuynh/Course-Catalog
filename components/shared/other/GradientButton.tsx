"use client";

import * as React from "react";
import { Button } from "@/components/ui/button"; // import Button shadcn
import { cn } from "@/lib/utils";

interface GradientButtonProps {
  title: string;
  onClick?: () => void;
  className?: string;
}

const GradientButton: React.FC<GradientButtonProps> = ({
  title,
  onClick,
  className,
}) => {
  return (
    <Button
      onClick={onClick}
      className={cn(
        "relative inline-flex items-center justify-center font-bold text-white rounded-full p-[2px] bg-gradient",
        "transition duration-300 hover:[box-shadow:-3px_0_4px_rgb(255,203,103),-3px_0_4px_rgb(237,84,9),3px_0_4px_rgb(80,97,121),3px_0_4px_rgb(33,78,129)] hover:scale-[1.02]",
        className
      )}
    >
      <span
        className="
          flex items-center justify-center px-5 py-1.5
          rounded-full font-medium bg-[#141416]/80
        "
      >
        {title}
      </span>
    </Button>
  );
};

export default GradientButton;
