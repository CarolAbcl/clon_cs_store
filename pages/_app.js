import Head from 'next/head'
import '../styles/globals.css'
import Layout from '../components/Layout'
import { StateProvider } from '../StateProvider'
import reducer, { initialState } from '../reducer'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <StateProvider initialState={initialState} reducer={reducer}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </StateProvider>
    </>
  )
}

export default MyApp
