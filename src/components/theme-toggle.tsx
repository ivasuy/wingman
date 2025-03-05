"use client";
import { useTheme } from "@/context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 transition-colors bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded-md"
    >
      {theme === "dark" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
}
