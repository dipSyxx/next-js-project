import Layout from '../components/Layout';
import '../styles/globals.scss'
import type { AppProps } from 'next/app'

export const App = ({ Component, pageProps }: AppProps) => (
  <Layout>
  <Component {...pageProps} />
  </Layout>
);

export default App
  

