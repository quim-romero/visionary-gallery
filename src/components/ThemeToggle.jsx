import { FiSun, FiMoon } from "react-icons/fi";
import useTheme from "../context/useTheme";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <FiSun className="w-5 h-5 text-yellow-400" />
      ) : (
        <FiMoon className="w-5 h-5 text-neutral-600 dark:text-neutral-300" />
      )}
    </button>
  );
}
