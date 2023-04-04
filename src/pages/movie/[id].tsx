import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { QueryClient, dehydrate } from '@tanstack/react-query';

import { getMovie, getMovieCredits } from '@/services';
import { useMovie, useMovieCredits } from '@/hooks';
import { MovieView } from '@/components/';

const MoviePage: NextPage = () => {
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
        <Link
          href={'/'}
          className='bg-blue-500 rounded-lg px-4 py-2 text-white font-bold mb-4'
        >
          Go Back
        </Link>
      </main>
    </>
  );
};
export default MoviePage;

export const getStaticProps: GetStaticProps = async (ctx) => {
  const id = ctx.params?.id;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['movie', id], () => getMovie(Number(id)));
  await queryClient.prefetchQuery(['movieCredits', id], () =>
    getMovieCredits(Number(id))
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};
