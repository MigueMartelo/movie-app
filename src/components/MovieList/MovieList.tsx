import Link from 'next/link';
import { Movie } from '@/interfaces';
import { MovieCard } from '../MovieCard/MovieCard';

interface MovieListProps {
  movies: Movie[];
}

export const MovieList = ({ movies }: MovieListProps) => {
  return (
    <section className='flex flex-wrap gap-4 justify-center items-center mt-6'>
      {!movies.length && (
        <>
          <h2 className='text-2xl text-center font-bold'>No Movies Found</h2>
          <Link
            href={'/'}
            className='bg-blue-500 rounded-lg px-4 py-2 text-white font-bold mb-4 hover:bg-blue-700'
          >
            Go Back
          </Link>
        </>
      )}
      {movies.map((movie) => (
        <article key={movie.id} className='w-80 mb-2'>
          <MovieCard movie={movie} />
        </article>
      ))}
    </section>
  );
};
