import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ThemeState {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: "light",
      toggleTheme: () => {
        const newTheme = get().theme === "light" ? "dark" : "light";
        set({ theme: newTheme });

        if (typeof window !== "undefined") {
          document.documentElement.classList.toggle("dark", newTheme === "dark");
        }
      },
    }),
    { name: "theme-storage" }
  )
);
