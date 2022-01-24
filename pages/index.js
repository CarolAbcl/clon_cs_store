import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Input from '../components/atoms/Input'
import { Button, ButtonSecondary, CartButton } from '../components/atoms/buttons'
import Badge from '../components/atoms/Badge'
import SearchBar from '../components/atoms/SearchBar'
import Check from '../components/atoms/Check'
import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCard'
import FilterGroup from '../components/FilterGroup'
import Filter from '../components/Filter'
import CardsGroup from '../components/CardsGroup'

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

export default function Home({ products, categories }) {

  return (
    <div className={styles.container}>
      <Head>
        <title>Tiendas - ComeS</title>
        {/* largo ideal description para SEO 142 caracteres con espacio" */}
        <meta
          name="description"
          content="Encuentra proveedores para tu tienda de alimentos fácilmente y respaldados por ComeS, la plataforma de alimentación sustentable de Chile."
        />
        <meta name="keywords" content="alimentos saludables, nuevos alimentos, sustentable" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Primera web ComeS</h1>

        <SearchBar size="100%" />
        <Input type="number" text="Rut"></Input>
        <Input text="Correo Electrónico"></Input>
        <Input text="Nombre"></Input>
        <div className="containerProductCard">
          <ul>
            {categories.map((category) => (
              <li key={category.ID_category}>{category.category}</li>
            ))}
          </ul>
        </div>
        <Button value="Ingresa" />
        <ButtonSecondary value="Seguir comprando" />
        <Badge value="Ruculas" />
        <CartButton />
        <Check />
        <Navbar />
        <Filter>
          <FilterGroup title="Categorias">
            {categories.map((category) => (
              <Check key={category.ID_category} text={category.category} addFilter={(e) => handleFilter(e)} />
            ))}
          </FilterGroup>
        </Filter>
      </main>

      <footer className={styles.footer}>
        <p>ComeS 2022</p>
      </footer>
    </div>
  )
}
