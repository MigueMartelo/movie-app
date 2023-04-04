import Head from 'next/head';

import { useMovies } from '@/hooks';
import { MovieList } from '@/components';

export default function Home() {
  const { data, isLoading, isError } = useMovies();
  console.log(isLoading, isError);

  return (
    <>
      <Head>
        <title>Movie Inc</title>
        <meta name='description' content='Show the best movies right now!' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='max-w-5xl mx-auto'>
        <h1 className='text-3xl font-bold text-center'>Movie Inc</h1>
        <MovieList movies={data?.results || []} />
      </main>
    </>
  );
}
