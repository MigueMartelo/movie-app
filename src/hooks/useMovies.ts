import { useQuery } from '@tanstack/react-query';
import { getMovie, getMovieCredits, getMovies } from '@/services';

export const useMovies = () => useQuery(['movies'], () => getMovies());

export const useMovie = (id: number) =>
  useQuery(['movie', id], () => getMovie(id));

export const useMovieCredits = (id: number) =>
  useQuery(['credits', id], () => getMovieCredits(id));
