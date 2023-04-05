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

  const { data: movie, isLoading, isError } = useMovie(Number(id));
  const { data: movieCredits } = useMovieCredits(Number(id));

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
      <>
        <div className='my-4'>
          {movie && (
            <MovieView movie={movie} movieCredits={movieCredits?.cast} />
          )}
        </div>
        <footer className='flex justify-between'>
          <Link
            href={'/'}
            className='bg-blue-500 rounded-lg px-4 py-2 text-white font-bold mb-4 hover:bg-blue-700'
          >
            Go Back
          </Link>
          <Link
            href={`/similar-movies?movieId=${id}`}
            className='bg-green-500 rounded-lg px-4 py-2 text-white font-bold mb-4 hover:bg-green-700'
          >
            Look Similar Movies
          </Link>
        </footer>
      </>
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
