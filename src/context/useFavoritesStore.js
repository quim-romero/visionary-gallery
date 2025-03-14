import { create } from "zustand";
import { persist } from "zustand/middleware";

const useFavoritesStore = create(
  persist(
    (set, get) => ({
      favorites: [],
      toggleFavorite: (art) => {
        const exists = get().favorites.find((a) => a.id === art.id);
        const updated = exists
          ? get().favorites.filter((a) => a.id !== art.id)
          : [...get().favorites, art];
        set({ favorites: updated });
      },
      isFavorite: (id) => {
        return get().favorites.some((a) => a.id === id);
      },
    }),
    {
      name: "visionary-favorites",
    }
  )
);

export default useFavoritesStore;
