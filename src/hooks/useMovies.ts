import { useQuery } from '@tanstack/react-query';
import { getMovies } from '@/services';

export const useMovies = () => useQuery(['movies'], () => getMovies());
