import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  const links = [
    { to: "/", label: "Home" },
    { to: "/galeria", label: "Gallery" },
    { to: "/favoritos", label: "Favorites" },
    { to: "/acerca", label: "About" },
    { to: "/contacto", label: "Contact" },
  ];

  return (
    <motion.header
      className="w-full fixed top-0 left-0 z-50 backdrop-blur bg-white/70 dark:bg-black/70 border-b border-neutral-200 dark:border-neutral-800"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <NavLink
          to="/"
          className="text-xl font-display tracking-tight hover:opacity-80 transition-opacity"
        >
          Visionary
        </NavLink>

        <div className="hidden md:flex items-center gap-6">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive
                    ? "text-black dark:text-white"
                    : "text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        <div className="md:hidden">
        </div>
      </nav>
    </motion.header>
  );
}
