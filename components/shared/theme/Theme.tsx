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
        <Icon icon="tabler:sun" width="24" height="24" className="text-glow" />
      ) : (
        <Icon icon="mynaui:moon" width="24" height="24" className="text-glow" />
      )}
    </button>
  );
};

export default ThemeSwitcher;
