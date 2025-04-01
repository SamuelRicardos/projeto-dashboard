"use client";

import { useThemeStore } from "@/components/store/themeStore";
import { Moon, Sun } from "lucide-react";
import { useEffect } from "react";

export default function ThemeToggle() {
  const { theme, toggleTheme, setTheme } = useThemeStore();

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme) {
      setTheme(storedTheme === "dark" ? "dark" : "light");
    } else {
      setTheme("light");
    }
  }, [setTheme]);

  const handleToggle = () => {
    toggleTheme();
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={handleToggle}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition"
    >
      {theme === "light" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
}
