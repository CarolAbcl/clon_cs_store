import Head from 'next/head'
import '../styles/globals.css'
import Layout from '../components/Layout'
import { Provider } from 'react-redux'
import { createWrapper } from 'next-redux-wrapper'
import store from '../store/store'
import Alert from '../components/Alert'
import { useEffect, useState } from 'react'

function MyApp({ Component, pageProps }) {
  //Estado que guarda los productos mostrados y posicion del scroll antes de cliquear una tarjeta
  const [returnCatalogue, setReturnCatalogue] = useState({ loadedProducts: null, positionScroll: 0 })
  //hook que obtiene la pagina dondre estamos para manejar el estado de los productos guardados
  useEffect(() => {
    const { location } = window
    const pathName = location.pathname.slice(0, 9)
    if (pathName === '/product/' || pathName === '/catalogo') {
    } else {
      setReturnCatalogue({ loadedProducts: null, positionScroll: 0 })
    }
  }, [])
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
      </Head>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} returnCatalogue={returnCatalogue} setReturnCatalogue={setReturnCatalogue} />
        </Layout>
      </Provider>
      <Alert />
    </>
  )
}

const makestore = () => store
const wrapper = createWrapper(makestore)

export default wrapper.withRedux(MyApp)
