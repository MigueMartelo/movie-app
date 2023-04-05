import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { QueryClient, dehydrate } from '@tanstack/react-query';

import { getMovies } from '@/services';
import { useMovies } from '@/hooks';
import { MovieList } from '@/components';

const Home: NextPage = () => {
  const { data } = useMovies();

  return (
    <>
      <Head>
        <title>Movie Inc</title>
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

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(['movies'], getMovies);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 60 * 60 * 24, // 24 hours because the data is static and doesn't change often
  };
};
