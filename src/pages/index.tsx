import { NextPage } from 'next';
import Head from 'next/head';
import { QueryClient, dehydrate } from '@tanstack/react-query';

import { useMovies } from '@/hooks';
import { MovieList } from '@/components';
import { getMovies } from '@/services';

const Home: NextPage = () => {
  const { data } = useMovies();

  return (
    <>
      <Head>
        <title>Movie Inc</title>
      </Head>
      <main className='max-w-5xl mx-auto'>
        <h1 className='text-4xl font-bold text-center'>Movie Inc</h1>
        <MovieList movies={data?.results} />
      </main>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(['movies'], getMovies);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 60 * 60 * 24, // 24 hours because the data is static and doesn't change often
  };
}
