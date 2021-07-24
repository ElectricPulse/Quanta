import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import Layout from '../components/Layout/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Quanta</title>
        <link rel="icon" type="image/png" href="images/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}
export default MyApp
