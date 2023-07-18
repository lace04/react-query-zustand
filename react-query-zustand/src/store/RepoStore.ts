import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type favoriteResposState = {
  favoriteReposIds: number[];
  addFavoriteRepo: (id: number) => void;
  removeFavoriteRepo: (id: number) => void;
};

//Esto es un estado global, se puede acceder desde cualquier componente que guarda los repositorios favoritos de github
export const useFavoritesStore = create(
  persist<favoriteResposState>(
    (set) => ({
      favoriteReposIds: [],
      addFavoriteRepo: (id: number) =>
        set((state) => ({
          favoriteReposIds: [...state.favoriteReposIds, id],
        })),
      removeFavoriteRepo: (id: number) =>
        set((state) => ({
          favoriteReposIds: state.favoriteReposIds.filter(
            (repoId) => repoId !== id
          ),
        })),
    }),
    {
      name: 'favorite-repos-storage',
    }
  )
);
