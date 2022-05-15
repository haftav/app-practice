import '../styles/globals.css';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: false,
    },
  },
});

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <Head>
          <title>App Practice</title>
          <meta
            name="description"
            content="Just some practice for making a next app with protected routes"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </QueryClientProvider>
    </SessionProvider>
  );
}

export default MyApp;
