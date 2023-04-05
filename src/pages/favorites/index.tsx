import { useContext } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

import { MovieList } from '@/components';
import { FavoriteContext } from '@/context/FavoriteContext';

const FavoritesPage: NextPage = () => {
  const { favorites } = useContext(FavoriteContext);

  return (
    <>
      <Head>
        <title>Movie Inc</title>
      </Head>
      <MovieList movies={favorites || []} />
    </>
  );
};

export default FavoritesPage;
