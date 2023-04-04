import Head from 'next/head';

import { useMovies } from '@/hooks';
import { MovieList } from '@/components';

export default function Home() {
  const { data } = useMovies();

  return (
    <>
      <Head>
        <title>Movie Inc</title>
      </Head>
      <main className='max-w-5xl mx-auto'>
        <h1 className='text-4xl font-bold text-center'>Movie Inc</h1>
        <MovieList movies={data?.results || []} />
      </main>
    </>
  );
}
