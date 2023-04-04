import { useRouter } from 'next/router';
import Head from 'next/head';
import { useMovie, useMovieCredits } from '@/hooks';
import { MovieView } from '@/components/MovieView/MovieView';

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
            <MovieView movie={movie} movieCredits={movieCredits?.cast} />
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
