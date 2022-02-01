import Link from 'next/link'
import Image from 'next/image'

function Custom404() {
  return (
    <>
      <main>
        <Link href="/catalogo">
          <a>
            <Image src="/ComesLogo.svg" alt="" width="500px" height="200px" layout="intrinsic" />
            <h1>Error 404</h1>
            <h2>Vuelve al catálogo haciendo click aquí</h2>
          </a>
        </Link>
      </main>
      <style jsx="true">
        {`
          main {
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
          }
        `}
      </style>
    </>
  )
}

export default Custom404
