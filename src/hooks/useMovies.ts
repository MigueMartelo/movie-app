import { useMutation, useQuery } from '@tanstack/react-query';
import { getMovie, getMovieCredits, getMovies, rateMovie } from '@/services';

export const useMovies = () => useQuery(['movies'], () => getMovies());

export const useMovie = (id: number) =>
  useQuery(['movie', id], () => getMovie(id));

export const useMovieCredits = (id: number) =>
  useQuery(['credits', id], () => getMovieCredits(id));

export const useRateMovie = () =>
  useMutation(({ movieId, rating }: { movieId: number; rating: number }) =>
    rateMovie(movieId, rating)
  );
