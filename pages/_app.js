import Head from 'next/head'
import '../styles/globals.css'
import Layout from '../components/Layout'
import { Provider } from 'react-redux'
import { createWrapper } from 'next-redux-wrapper'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import {minPurshase} from '../helpers/minPurshase'
import store from '../store/store'
import Alert from '../components/Alert'

function MyApp({ Component, pageProps }) {
  const producers = useSelector((state) => state.producers)
  const cart = useSelector((state) => state.cart)

  useEffect(() => {
    minPurshase(producers, cart)
  }, [cart])
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
      </Head>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
      <Alert/>
    </>
  )
}

const makestore = () => store
const wrapper = createWrapper(makestore)

export default wrapper.withRedux(MyApp)
