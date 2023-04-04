import Image from 'next/image';
import Link from 'next/link';
import { Movie } from '@/interfaces';
import config from '@/config';

interface MovieListProps {
  movies: Movie[];
}

const { IMAGE_URL } = config;

export const MovieList = ({ movies }: MovieListProps) => (
  <section className='flex flex-wrap gap-4 justify-center items-center mt-6'>
    {movies.map((movie) => (
      <article key={movie.id} className='w-80 mb-2'>
        <header className='flex justify-center align-center text-lg font-bold'>
          <h2>{movie.title} - </h2>
          <span>- {movie.release_date}</span>
        </header>
        <figure className='h64 w-80 relative'>
          <Link href={`/movie/${movie.id}`}>
            <Image
              className='rounded mb-2'
              src={`${IMAGE_URL}${movie.poster_path}`}
              width={320}
              height={400}
              alt={movie.title}
            />
          </Link>
        </figure>
        <div className='flex justify-between'>
          <p>
            Rating: <span className='font-bold'>{movie.vote_average} / 10</span>
          </p>
          <Link
            href={`/movie/${movie.id}`}
            className='hover:underline text-blue-500'
          >
            Read More...
          </Link>
        </div>
      </article>
    ))}
  </section>
);
