import Image from 'next/image';
import config from '@/config';
import { ICast, IGenre } from '@/interfaces';
import { StarRating } from '@/components';

const { IMAGE_URL } = config;

interface IMovieViewProps {
  movie: {
    id: number;
    title: string;
    release_date: string;
    poster_path: string;
    overview: string;
    genres: IGenre[];
    vote_average: number;
  };
  movieCredits: ICast[];
}

export const MovieView = ({ movie, movieCredits }: IMovieViewProps) => {
  return (
    <>
      <div className='flex justify-between font-bold mb-2'>
        <h2 className='text-2xl'>{movie.title}</h2>
        <span>Release: {movie.release_date}</span>
      </div>
      <div className='flex gap-4'>
        <Image
          src={`${IMAGE_URL}${movie.poster_path}`}
          alt={movie.title}
          width={500}
          height={500}
        />
        <div>
          <p className='font-bold'>Overview:</p>
          <p>{movie.overview}</p>
          <div className='flex'>
            <span className='font-bold'>Genres:</span>
            {movie.genres.map((gen: IGenre) => (
              <span key={gen.name} className='mr-2'>
                {gen.name}
              </span>
            ))}
          </div>
          <div>
            <span className='font-bold'>Rating:</span>{' '}
            <span>{movie.vote_average.toFixed(1)}/10</span>
          </div>
          {movieCredits && (
            <div>
              <span className='font-bold'>Cast:</span>
              {movieCredits.map((cast: ICast) => (
                <p key={cast.id}>
                  <span className='mr-2'>
                    {cast.name} as {cast.character}
                  </span>
                </p>
              ))}
            </div>
          )}
          <div>
            <StarRating movieId={movie.id} />
          </div>
        </div>
      </div>
    </>
  );
};
