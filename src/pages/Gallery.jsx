import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import artworks from "../data/artworks.json";
import GalleryCard from "../components/GalleryCard";
import FiltersBar from "../components/FiltersBar";

export default function Gallery() {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    setData(artworks);
    setFiltered(artworks);
  }, []);

  return (
    <>
      <Helmet>
        <title>Gallery – Visionary Gallery</title>
      </Helmet>

      <motion.main
        className="min-h-screen px-4 py-24 max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-display mb-8 text-center">
          Digital Works
        </h1>

        <FiltersBar artworks={data} onFilter={setFiltered} />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filtered.map((art) => (
            <GalleryCard key={art.id} artwork={art} />
          ))}
        </div>
      </motion.main>
    </>
  );
}
