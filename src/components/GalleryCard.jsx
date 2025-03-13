import { motion } from "framer-motion";

export default function GalleryCard({ artwork }) {
  return (
    <motion.div
      className="group relative cursor-pointer overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm hover:shadow-md transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={artwork.image}
          alt={artwork.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      <div className="p-4 space-y-1">
        <h2 className="text-lg font-semibold">{artwork.title}</h2>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {artwork.artist}
        </p>
        <span className="inline-block text-xs mt-1 px-2 py-0.5 bg-neutral-100 dark:bg-neutral-800 rounded-full text-neutral-500 dark:text-neutral-300">
          {artwork.category} · {artwork.style}
        </span>
      </div>
    </motion.div>
  );
}
