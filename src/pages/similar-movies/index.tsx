import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { useSimilarMovies } from '@/hooks';
import { MovieList } from '@/components';

const SimilarMoviesPage: NextPage = () => {
  const router = useRouter();
  const { movieId } = router.query;
  const { data } = useSimilarMovies(Number(movieId));

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
