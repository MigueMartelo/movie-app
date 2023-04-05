import { Movie } from '@/interfaces';
import { createContext, useReducer, useEffect } from 'react';
import { favoriteReducer } from './FavoriteReducer';

const initialState = {
  favorites: [] as Movie[],
  addToFavorites: (movie: Movie) => {},
  removeFromFavorites: (movie: Movie) => {},
};

export const FavoriteContext = createContext(initialState);

interface FavoriteContextProviderProps {
  children: React.ReactNode;
}

export const FavoriteContextProvider = ({
  children,
}: FavoriteContextProviderProps) => {
  const [state, dispatch] = useReducer(favoriteReducer, initialState);

  const addToFavorites = (movie: Movie) => {
    dispatch({ type: 'ADD_TO_FAVORITE', payload: movie });
  };

  const removeFromFavorites = (movie: Movie) => {
    dispatch({ type: 'REMOVE_FROM_FAVORITE', payload: movie });
  };

  return (
    <FavoriteContext.Provider
      value={{
        favorites: state.favorites,
        addToFavorites,
        removeFromFavorites,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};
