import Head from 'next/head'
import SearchBar from '../components/atoms/SearchBar'
import CardsGroup from '../components/CardsGroup'
import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCard'

function Catalogo() {
  return (
    <div>
      <Head>
        <meta
          name="description"
          content="Encuentra proveedores para tu tienda de alimentos fácilmente y respaldados por ComeS, la plataforma de alimentación sustentable de Chile."
        />
        <meta name="keywords" content="alimentos saludables, nuevos alimentos, sustentable" />
      </Head>
      <main>
        <Navbar />
        <div className="container">
          <div className="header-catalogo">
            <h2 className="primary">CATÁLOGO</h2>
            <SearchBar size="100%" />
          </div>
          <hr />
          <CardsGroup>
            <ProductCard />
          </CardsGroup>
        </div>
      </main>
      <style jsx>
        {`
          .header-catalogo {
            display: flex;
            align-items: center;
            gap: 1rem;
          }
          .container {
            padding: 1rem;
          }

          h2.primary {
            font-weight: normal;
          }
        `}
      </style>
    </div>
  )
}

export default Catalogo
