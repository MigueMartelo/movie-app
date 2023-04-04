import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import { useMovie, useMovieCredits } from '@/hooks';
import config from '@/config';

const { IMAGE_URL } = config;

interface IGenre {
  id: number;
  name: string;
}

interface ICast {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}

const MoviePage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data: movie } = useMovie(Number(id));
  const { data: movieCredits } = useMovieCredits(Number(id));

  return (
    <>
      <Head>
        <title>Movie Inc</title>
      </Head>
      <main className='max-w-5xl mx-auto'>
        <h1 className='text-3xl font-bold text-center'>Movie Inc</h1>
        <div className='my-4'>
          {movie && (
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
                      {movieCredits.cast.map((cast: ICast) => (
                        <p key={cast.id}>
                          <span className='mr-2'>
                            {cast.name} as {cast.character}
                          </span>
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
        <button
          className='bg-blue-500 rounded-lg px-4 py-2 text-white font-bold mb-4'
          onClick={() => router.push('/')}
        >
          Go Back
        </button>
      </main>
    </>
  );
};
export default MoviePage;
