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
      <main className='max-w-5xl mx-auto'>
        <Link href='/'>
          <h1 className='text-4xl font-bold text-center'>Movie Inc</h1>
        </Link>
        <MovieList movies={data || []} />
      </main>
    </>
  );
};

export default SimilarMoviesPage;
