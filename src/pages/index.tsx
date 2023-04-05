import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { QueryClient, dehydrate } from '@tanstack/react-query';

import { getMovies } from '@/services';
import { useMovies } from '@/hooks';
import { MovieList } from '@/components';

const Home: NextPage = () => {
  const { data, isLoading, isError } = useMovies();

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
        <title>Movie Inc</title>
      </Head>
      <MovieList movies={data || []} />
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
