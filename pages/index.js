import Head from 'next/head'
import styles from '../styles/Home.module.css'
import QtyAddCart from '../components/atoms/QtyAddCart'
import Input from '../components/atoms/Input'
import Button from '../components/atoms/Button'
import ButtonSecondary from '../components/atoms/ButtonSecondary'
import Badge from '../components/atoms/Badge'
import SearchBar from '../components/atoms/SearchBar'
import CartButton from '../components/atoms/CartButton'
import Check from '../components/atoms/Check'
import Menu from '../components/Menu'
import ProductCard from '../components/ProductCard'

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const getServerSideProps = async () => {
    const categories = await prisma.category.findMany()
    return {
      props: {
        initialCategories: categories,
      },
    }


}

export default function Home({ initialCategories }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tiendas - ComeS</title>
        {/* largo ideal description para SEO 142 caracteres con espacio" */}
        <meta
          name="description"
          content="Encuentra proveedores para tu tienda de alimentos fácilmente y respaldados por ComeS, la plataforma de alimentación sustentable de Chile."
        />
        <meta name="keywords" content="alimentos sludables, nuevos alimentos, sustentable" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Primera web ComeS</h1>

        <SearchBar size="100%" />
        <Input type="number" text="Rut"></Input>
        <Input text="Correo Electrónico"></Input>
        <Input text="Nombre"></Input>

        <ProductCard />

        <Button value="Ingresa" />
        <ButtonSecondary value="Seguir comprando" />
        <Badge value="Ruculas" />
        <CartButton />
        <Check />
        <Menu />

        <ul>
          {initialCategories.map((category) => (
            <li key={category.ID_category}>{category.category}</li>
          ))}
        </ul>
      </main>

      <footer className={styles.footer}>
        <p>ComeS 2022</p>
      </footer>
    </div>
  )
}
