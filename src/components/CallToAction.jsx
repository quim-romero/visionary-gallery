import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <motion.section
      className="px-4 py-20 max-w-3xl mx-auto text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-2xl md:text-3xl font-display mb-4">
        Ready to explore more?
      </h3>
      <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8">
        Discover the full curated collection of visionary digital art across categories, styles and formats.
      </p>

      <Link
        to="/gallery"
        className="inline-block px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded-full text-sm font-medium transition-colors hover:opacity-90"
      >
        Browse Full Gallery
      </Link>
    </motion.section>
  );
}
