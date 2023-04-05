import { useState } from 'react';
import type { AppProps } from 'next/app';
import '@/styles/globals.css';

import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import '@/styles/globals.css';
import Layout from './_layout';
import { FavoriteContextProvider } from '@/context/FavoriteContext';

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <FavoriteContextProvider>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Hydrate>
      </QueryClientProvider>
    </FavoriteContextProvider>
  );
}
