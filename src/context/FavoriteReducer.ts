import { Movie } from '@/interfaces';

interface Action {
  type: string;
  payload: Movie;
}

interface State {
  favorites: Movie[];
}

export const favoriteReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITE':
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case 'REMOVE_FROM_FAVORITE':
      return {
        ...state,
        favorites: state.favorites.filter(
          (movie: Movie) => movie.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};
