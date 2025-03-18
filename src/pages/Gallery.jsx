import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import artworks from "../data/artworks.json";
import GalleryCard from "../components/GalleryCard";
import FiltersBar from "../components/FiltersBar";
import LightboxModal from "../components/LightboxModal";

export default function Gallery() {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    setData(artworks);
    setFiltered(artworks);
  }, []);

  const handleOpen = (art) => setSelected(art);
  const handleClose = () => setSelected(null);

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
            <div key={art.id} onClick={() => handleOpen(art)}>
              <GalleryCard artwork={art} />
            </div>
          ))}
        </div>
      </motion.main>

      <LightboxModal artwork={selected} onClose={handleClose} />
    </>
  );
}
