import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { useSimilarMovies } from '@/hooks';
import { MovieList } from '@/components';

const SimilarMoviesPage: NextPage = () => {
  const router = useRouter();
  const { movieId } = router.query;
  const { data, isLoading, isError } = useSimilarMovies(Number(movieId));

  if (isLoading) {
    return <div className='text-2xl font-bold text-blue-400'>Loading...</div>;
  }

  if (isError) {
    return (
      <div className='text-2xl font-bold text-red-400'>
        Ops! Something Wrong!!!
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Movie Inc - Similar Movies</title>
      </Head>
      <MovieList movies={data || []} />
    </>
  );
};

export default SimilarMoviesPage;
