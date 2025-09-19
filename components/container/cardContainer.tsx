"use client";

import { ReactNode } from "react";
import clsx from "clsx";

interface CardContainerProps {
  children: ReactNode;
  className?: string;
}

export default function CardContainer({
  children,
  className,
}: CardContainerProps) {
  return (
    <div
      className={clsx(
        "relative flex flex-col items-center p-4 rounded-xl border bg-card/60 backdrop-blur text-card-foreground pointer-events-auto transition-all duration-200 hover:shadow-lg group",
        className
      )}
    >
      {children}
    </div>
  );
}
