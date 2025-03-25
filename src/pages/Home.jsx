import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home – Visionary Gallery</title>
      </Helmet>

      <motion.main
        className="min-h-screen flex items-center justify-center bg-white dark:bg-black px-4"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -24 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-display mb-4">
            Visionary Gallery
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto">
            A curated space for discovering digital art.
          </p>
        </div>
      </motion.main>
    </>
  );
}
