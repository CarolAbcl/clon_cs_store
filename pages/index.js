import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
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

      <main>
        <Link href="/catalogo">
          <a>
            <Image src="/ComesLogo.svg" alt="" width="500px" height="200px" layout="intrinsic" />
            <h2>Click para entrar en el catálogo de productos</h2>
          </a>
        </Link>
      </main>

      <footer>
        <p>ComeS 2022</p>
      </footer>
      <style jsx>
        {`
          main {
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}
      </style>
    </div>
  )
}