import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 – Page Not Found | Visionary Gallery</title>
      </Helmet>

      <motion.main
        className="min-h-screen flex items-center justify-center text-center px-4 bg-white dark:bg-black"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -16 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div>
          <h1 className="text-5xl font-display mb-4">404</h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6">
            The page you’re looking for doesn’t exist.
          </p>
          <Link
            to="/"
            className="text-base font-medium text-black dark:text-white border border-neutral-300 dark:border-neutral-700 px-4 py-2 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            Go back home
          </Link>
        </div>
      </motion.main>
    </>
  );
}
