import { useState, useEffect } from "react";

export default function FiltersBar({ artworks, onFilter }) {
  const [categories, setCategories] = useState([]);
  const [active, setActive] = useState("All");

  useEffect(() => {
    const unique = [
      ...new Set(artworks.map((item) => item.category))
    ];
    setCategories(["All", ...unique]);
  }, [artworks]);

  const handleFilter = (category) => {
    setActive(category);
    const filtered =
      category === "All"
        ? artworks
        : artworks.filter((art) => art.category === category);
    onFilter(filtered);
  };

  return (
    <div className="sticky top-16 z-40 bg-white dark:bg-black border-b border-neutral-200 dark:border-neutral-800 py-4 mb-6">
      <div className="flex flex-wrap items-center gap-3 px-4 max-w-7xl mx-auto">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleFilter(cat)}
            className={`text-sm px-3 py-1.5 rounded-full border transition-colors ${
              active === cat
                ? "bg-black text-white dark:bg-white dark:text-black border-black dark:border-white"
                : "text-neutral-500 border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}
