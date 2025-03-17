import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";

export default function LightboxModal({ artwork, onClose }) {
  if (!artwork) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-white dark:bg-neutral-900 rounded-xl max-w-3xl w-full relative overflow-hidden"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-neutral-500 hover:text-black dark:hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <FiX className="w-6 h-6" />
          </button>

          <div className="grid md:grid-cols-2 gap-6 p-6">
            <img
              src={artwork.image}
              alt={artwork.title}
              className="w-full h-auto rounded object-cover"
            />

            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-semibold mb-2">{artwork.title}</h2>
              <p className="text-sm text-neutral-500 mb-4">
                by {artwork.artist}
              </p>
              <p className="text-base text-neutral-700 dark:text-neutral-300 mb-4">
                {artwork.description}
              </p>
              <span className="text-xs text-neutral-400">
                {artwork.category} · {artwork.type} · {artwork.style}
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
