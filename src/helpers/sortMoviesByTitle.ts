import { Movie } from '@/interfaces';

export const sortMoviesByTitle = (movies: Movie[]): Movie[] => {
  return movies.sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  });
};
