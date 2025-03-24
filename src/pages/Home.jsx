import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home – Visionary Gallery</title>
      </Helmet>

      <Hero />

      <motion.main
        className="min-h-screen bg-white dark:bg-black px-4 py-24"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -24 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display mb-4">
            Curated Digital Works
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400">
            Explore featured pieces from our visionary artists. Each work is
            selected for its conceptual clarity and creative impact.
          </p>
        </div>

      </motion.main>
    </>
  );
}

