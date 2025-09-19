"use client";

import { ReactNode } from "react";
import clsx from "clsx";

interface PageContainerProps {
  children: ReactNode;
  className?: string;
}

export default function PageContainer({
  children,
  className,
}: PageContainerProps) {
  return (
    <div
      className={clsx(
        "w-full py-5 background-light100_dark100 justify-between items-center flex flex-col gap-5",
        className
      )}
    >
      {children}
    </div>
  );
}
