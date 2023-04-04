import Image from 'next/image';
import Link from 'next/link';
import { sortMoviesByTitle } from '@/helpers';
import { Movie } from '@/interfaces';
import config from '@/config';

interface MovieListProps {
  movies: Movie[];
}

const { IMAGE_URL } = config;

export const MovieList = ({ movies }: MovieListProps) => (
  <div className='flex flex-wrap gap-4 justify-center items-center mt-6'>
    {movies.map((movie) => (
      <div key={movie.id} className='w-80 mb-2'>
        <div className='flex justify-center align-center text-lg font-bold'>
          <h3>{movie.title} - </h3>
          <span>- {movie.release_date}</span>
        </div>
        <div className='h64 w-80 relative'>
          <Link href={`/movie/${movie.id}`}>
            <Image
              className='rounded mb-2'
              src={`${IMAGE_URL}${movie.poster_path}`}
              width={320}
              height={400}
              alt={movie.title}
            />
          </Link>
        </div>
        <div className='flex justify-between'>
          <div>
            Rating: <span className='font-bold'>{movie.vote_average} / 10</span>
          </div>
          <Link href={`/movie/${movie.id}`}>Read More...</Link>
        </div>
      </div>
    ))}
  </div>
);
