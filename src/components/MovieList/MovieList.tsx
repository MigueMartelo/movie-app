import { sortMoviesByTitle } from '@/helpers';
import { Movie } from '@/interfaces';
import Image from 'next/image';
import { title } from 'process';

interface MovieListProps {
  movies: Movie[];
}

const imageURL = 'https://image.tmdb.org/t/p/w500';

export const MovieList = ({ movies }: MovieListProps) => {
  const moviesOrderedAlphabetically = sortMoviesByTitle(movies);

  return (
    <div className='flex flex-wrap gap-4 justify-center items-center mt-6'>
      {moviesOrderedAlphabetically.map((movie) => (
        <div key={movie.id} className='w-80 mb-2'>
          <div className='flex justify-center align-center text-lg font-bold'>
            <h3>{movie.title} - </h3>
            <span>- {movie.release_date}</span>
          </div>
          <div className='h64 w-80 relative'>
            <Image
              className='rounded mb-2'
              src={`${imageURL}${movie.poster_path}`}
              width={320}
              height={400}
              alt={movie.title}
            />
          </div>
          <div className='flex justify-between'>
            <div>
              Rating:{' '}
              <span className='font-bold'>{movie.vote_average} / 10</span>
            </div>
            <div>Read More...</div>
          </div>
        </div>
      ))}
    </div>
  );
};
