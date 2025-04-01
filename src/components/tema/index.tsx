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
      className="relative w-14 h-8 rounded-full bg-gray-200 dark:bg-gray-800 transition-colors m-4 shadow-lg"
    >
      {/* A div que move a parte interna (círculo) */}
      <div
        className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
          theme === "dark" ? "transform translate-x-6" : ""
        }`}
      />

      {/* A div que contém o ícone (sol ou lua) */}
      <div className="relative w-full h-full flex items-center justify-between px-1 transition-all">
        {/* Ícone do sol à esquerda quando tema claro */}
        {theme === "light" ? (
          <div className="flex justify-start w-full p-2 cursor-pointer">
            <Sun className="w-4 h-4 text-yellow-500 transition-all" />
          </div>
        ) : (
          // Ícone da lua à direita quando tema escuro
          <div className="flex justify-end w-full p-2 cursor-pointer">
            <Moon className="w-4 h-4 text-blue-500 transition-all" />
          </div>
        )}
      </div>
    </button>
  );
}
