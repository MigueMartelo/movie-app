import { useState, useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Movie } from '@/interfaces';
import config from '@/config';
import { FavoriteContext } from '@/context/FavoriteContext';

const { IMAGE_URL } = config;

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard = ({ movie }: MovieCardProps) => {
  const { favorites, addToFavorites, removeFromFavorites } =
    useContext(FavoriteContext);
  const [isInFav, setIsInFav] = useState(
    favorites.some((fav) => fav.id === movie.id)
  );

  const buttonToShow = isInFav ? (
    <button
      className='text-red-400 px-2 hover:bg-red-400 hover:text-white hover:rounded'
      onClick={() => {
        removeFromFavorites(movie);
        setIsInFav(!isInFav);
      }}
    >
      Remove Fav
    </button>
  ) : (
    <button
      className='text-red-400 px-2 hover:bg-red-400 hover:text-white hover:rounded'
      onClick={() => {
        addToFavorites(movie);
        setIsInFav(!isInFav);
      }}
    >
      Add Fav
    </button>
  );

  return (
    <div>
      <header className='flex flex-col justify-center items-center'>
        <h2 className='text-lg font-bold'>{movie.title}</h2>
        <span className='text-sm'>{movie.release_date}</span>
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
        {buttonToShow}
        <Link
          href={`/movie/${movie.id}`}
          className='hover:underline text-blue-500'
        >
          Read More...
        </Link>
      </div>
    </div>
  );
};
