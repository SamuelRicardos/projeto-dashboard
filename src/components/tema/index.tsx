"use client";

import { useThemeStore } from "@/components/store/themeStore";
import { Moon, Sun } from "lucide-react";
import { useEffect } from "react";
import { TooltipProvider, Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

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
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div>
            <button
              onClick={handleToggle}
              className="relative w-14 h-8 rounded-full bg-gray-200 dark:bg-gray-800 transition-colors m-4 shadow-lg"
            >
              <div
                className={`absolute top-1 left-1 w-6 h-6 rounded-full transition-transform duration-300 ${
                  theme === "dark" ? "transform translate-x-6" : ""
                }`}
              />

              <div className="relative w-full h-full flex items-center justify-between px-1">
                {theme === "light" ? (
                  <div className="flex justify-start w-full p-2 cursor-pointer">
                    <Sun className="w-4 h-4 text-yellow-500 transition-all" />
                  </div>
                ) : (
                  <div className="flex justify-end w-full p-2 cursor-pointer">
                    <Moon className="w-4 h-4 text-blue-500 transition-all" />
                  </div>
                )}
              </div>
            </button>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          {theme === "light" ? "Modo Claro" : "Modo Escuro"}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
