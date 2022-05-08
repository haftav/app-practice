import '../styles/globals.css';
import type { AppProps } from 'next/app';

console.log('thing');
var my_thing = 5;

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
