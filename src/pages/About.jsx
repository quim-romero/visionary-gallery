import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About – Visionary Gallery</title>
      </Helmet>

      <motion.main
        className="min-h-screen px-4 py-24 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-display mb-6">About Visionary</h1>

        <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-4">
          Visionary Gallery is a curated platform showcasing digital art from
          forward-thinking creators around the world. From abstract landscapes
          to experimental animation, every piece is selected for its conceptual
          clarity and visual depth.
        </p>

        <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-4">
          Our mission is to elevate digital artwork as a serious and collectible
          medium, creating an immersive space for discovery, admiration, and
          connection between artists and audiences.
        </p>

        <p className="text-sm text-neutral-400 dark:text-neutral-500">
          This is a fictional project designed for portfolio demonstration
          purposes. All artwork, names and visuals are mock data.
        </p>
      </motion.main>
    </>
  );
}
