import artworks from "../data/artworks.json";
import GalleryCard from "./GalleryCard";
import { motion } from "framer-motion";

export default function FeaturedWorks() {
  const featured = artworks.slice(0, 3); // Puedes ajustar cantidad

  return (
    <section className="px-4 py-16 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl md:text-3xl font-display text-center mb-8">
          Featured Works
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {featured.map((art) => (
            <GalleryCard key={art.id} artwork={art} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
