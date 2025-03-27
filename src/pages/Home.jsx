import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import FeaturedWorks from "../components/FeaturedWorks";
import CallToAction from "../components/CallToAction";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home – Visionary Gallery</title>
      </Helmet>

      <motion.main
        className="min-h-screen bg-white dark:bg-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <section className="h-screen flex items-center justify-center px-4 text-center">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-display mb-4">
              Curated Digital Works
            </h2>
            <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400">
              Explore featured pieces from our visionary artists. Each work is
              selected for its conceptual clarity and creative impact.
            </p>
          </div>
        </section>

        <FeaturedWorks />
        <CallToAction />
      </motion.main>
    </>
  );
}
