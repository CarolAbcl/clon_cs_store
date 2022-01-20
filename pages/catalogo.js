import Head from 'next/head'
import SearchBar from '../components/atoms/SearchBar'
import CardsGroup from '../components/CardsGroup'
import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCard'

const fetchProducts = async () => {
  const response = await fetch(`${process.env.API_URL}/api/product/products`)
  const { data } = await response.json()
  return { products: data }
}
const fetchCategories = async () => {
  const response = await fetch(`${process.env.API_URL}/api/category/categories`)
  const { data } = await response.json()
  return { categories: data }
}

export const getStaticProps = async () => {
  const { products } = await fetchProducts()
  const { categories } = await fetchCategories()

  return { props: { products, categories } }
}

function Catalogo({ products, categories }) {
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
            {products.map((product) => (
              <ProductCard key={product.ID_product} product={product} />
            ))}
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
