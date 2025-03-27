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

        {/* Testimonials */}
        <section className="mt-20 space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <blockquote className="text-xl italic text-neutral-600 dark:text-neutral-400 text-center max-w-2xl mx-auto">
              “Visionary redefined how I present my digital works. It feels like
              exhibiting in a living, breathing gallery.”
            </blockquote>
            <p className="text-sm text-neutral-500 dark:text-neutral-500 text-center mt-2">
              — Nova Estrella, Digital Artist
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <blockquote className="text-xl italic text-neutral-600 dark:text-neutral-400 text-center max-w-2xl mx-auto">
              “It’s more than a portfolio—it’s a space for intention and
              atmosphere.”
            </blockquote>
            <p className="text-sm text-neutral-500 dark:text-neutral-500 text-center mt-2">
              — Kai Noma, Conceptual Designer
            </p>
          </motion.div>
        </section>
      </motion.main>
    </>
  );
}
