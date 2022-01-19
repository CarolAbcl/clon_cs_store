import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Input from '../components/atoms/Input'
import { Button, ButtonSecondary, CartButton } from '../components/atoms/buttons'
import Badge from '../components/atoms/Badge'
import SearchBar from '../components/atoms/SearchBar'
import Check from '../components/atoms/Check'
import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCard'
import useGetProducts from '../hooks/useGetProducts'


export default function Home() {
  const { data, isLoading } = useGetProducts()

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
          {
            !isLoading &&
            data.products.map(product => (
              <ProductCard key={product.ID_product} productName={product.name} producerName={'falta'} />

            ))
          }

        </div>
        <Button value="Ingresa" />
        <ButtonSecondary value="Seguir comprando" />
        <Badge value="Ruculas" />
        <CartButton />
        <Check />
        <Navbar />

      </main>

      <footer className={styles.footer}>
        <p>ComeS 2022</p>
      </footer>
    </div>
  )
}
