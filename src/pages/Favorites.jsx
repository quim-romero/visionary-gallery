import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import useFavoritesStore from "../context/useFavoritesStore";
import GalleryCard from "../components/GalleryCard";

export default function Favorites() {
  const { favorites } = useFavoritesStore();

  return (
    <>
      <Helmet>
        <title>Favorites – Visionary Gallery</title>
      </Helmet>

      <motion.main
        className="min-h-screen px-4 py-24 max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -16 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-display mb-8 text-center">
          Your Favorite Works
        </h1>

        {favorites.length === 0 ? (
          <p className="text-center text-neutral-500 dark:text-neutral-400">
            You haven't added any favorites yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {favorites.map((art) => (
              <GalleryCard key={art.id} artwork={art} />
            ))}
          </div>
        )}
      </motion.main>
    </>
  );
}
