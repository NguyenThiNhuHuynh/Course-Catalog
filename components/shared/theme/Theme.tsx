import React from "react";
import { useTheme } from "@/contexts/ThemeProvider";
import { Icon } from "@iconify/react";

const ThemeSwitcher = () => {
  const { mode, setMode } = useTheme();

  return (
    <button
      onClick={() => setMode(mode === "light" ? "dark" : "light")}
      className="p-2 rounded-full"
      aria-label="Toggle Theme "
    >
      {mode === "light" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <defs>
            <linearGradient id="sunGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ffcb67" />
              <stop offset="25%" stopColor="#ed5409" />
              <stop offset="50%" stopColor="#506179" />
              <stop offset="100%" stopColor="#214e81" />
            </linearGradient>
          </defs>
          <path
            fill="none"
            stroke="url(#sunGradient)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 12a4 4 0 1 0 8 0a4 4 0 1 0-8 0m-5 0h1m8-9v1m8 8h1m-9 8v1M5.6 5.6l.7.7m12.1-.7l-.7.7m0 11.4l.7.7m-12.1-.7l-.7.7"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <defs>
            <linearGradient id="moonGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ffcb67" />
              <stop offset="25%" stopColor="#ed5409" />
              <stop offset="50%" stopColor="#506179" />
              <stop offset="100%" stopColor="#214e81" />
            </linearGradient>
          </defs>
          <path
            fill="none"
            stroke="url(#moonGradient)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M21 12.808c-.5 5.347-5.849 9.14-11.107 7.983C-.078 18.6 1.15 3.909 11.11 3C6.395 9.296 14.619 17.462 21 12.808"
          />
        </svg>
      )}
    </button>
  );
};

export default ThemeSwitcher;
