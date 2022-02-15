import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ButtonSecondary } from '../components/atoms/buttons'
import { Icon } from '@material-ui/core'
import { sendWhatsApp } from '../helpers/shareWhatsapp'

export default function Home() {
  const router = useRouter()

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
        <header className="hero">
          <div className="wrapper">
            <h2 className="hero-text">Encuentra productores para tu tienda en un sólo lugar</h2>
            <ButtonSecondary
              backgroundColor="var(--secondary)"
              value="Ingresa al catálogo"
              fontSize="1.25rem"
              style={{ padding: '1rem 2rem', width: 'fit-content' }}
              onClick={() => router.push('/catalogo')}
            />
          </div>
        </header>
        <section className="container mid-section">
          <div className="wrapper">
            <p>
              En ComeS conectamos a pequeños productores de alimentos con tiendas de alimentación, emporios y
              restaurantes.
            </p>
          </div>
        </section>
        <section className="container">
          <div className="wrapper">
            <h1>Facilitamos la gestión con tus proveedores</h1>
            <ul className="beneficios">
              <li>
                <div className="img-container">
                  <Image
                    src={'/iconos_comeschile-15.png'}
                    alt="proceso de compra"
                    width={200}
                    height={200}
                    layout="responsive"
                    sizes="50vw"
                    objectFit="fill"
                  />
                </div>
                <p>Nos encargamos de todo tu proceso de compra</p>
              </li>
              <li>
                <div className="img-container">
                  <Image
                    src={'/optimiza-tiempo.svg'}
                    alt="proceso de compra"
                    width={200}
                    height={200}
                    layout="responsive"
                    sizes="50vw"
                    objectFit="fill"
                  />
                </div>
                <p>Optimizas tu tiempo</p>
              </li>
              <li>
                <div className="img-container">
                  <Image
                    src={'/2.3Gestiona tu tienda.png'}
                    alt="proceso de compra"
                    width={200}
                    height={200}
                    layout="responsive"
                    sizes="50vw"
                    objectFit="fill"
                  />
                </div>
                <p>Incorporamos nuevos productos constantemente</p>
              </li>
              <li>
                <div className="img-container">
                  <Image
                    src={'/2.2Contacto con nuestro equipo.png'}
                    alt="proceso de compra"
                    width={200}
                    height={200}
                    layout="responsive"
                    sizes="50vw"
                    objectFit="fill"
                  />
                </div>
                <p>Comunicación fluida con el equipo de Comercial de ComeS</p>
              </li>
              <li>
                <div className="img-container">
                  <Image
                    src={'/2.1Incorporacion.png'}
                    alt="proceso de compra"
                    width={200}
                    height={200}
                    layout="responsive"
                    sizes="50vw"
                    objectFit="fill"
                  />
                </div>
                <p>Seleccionamos a los productores que cumplen con los requisitos para estar en nuestra red</p>
              </li>
              <li>
                <div className="img-container">
                  <Image
                    src={'/experiencia-usuarios-finales.svg'}
                    alt="proceso de compra"
                    width={200}
                    height={200}
                    layout="responsive"
                    sizes="50vw"
                    objectFit="fill"
                  />
                </div>
                <p>Tenemos experiencia atendiendo a los consumidores finales</p>
              </li>
            </ul>
          </div>
        </section>
        <section className="container te-invitamos">
          <div className="wrapper">
            <h1>Te invitamos a ser parte de esta red.</h1>
            <p>
              Creemos que con colaboración podemos lograr grandes cambios y juntos fomentar un sistema de alimentación
              más sustentable.
            </p>
            <ButtonSecondary
              backgroundColor="var(--primary)"
              value="ver productos"
              fontSize="1.25rem"
              style={{ padding: '1rem 2rem', width: 'fit-content' }}
              onClick={() => router.push('/catalogo')}
            />
          </div>
        </section>
        <section className="container mid-section">
          <div className="wrapper">
            <h1>Con tu compra</h1>
            <ul className="mid-section-list">
              <li>
                <p>Aportas acercando mejores alimentos a tus clientes y comunidad</p>
              </li>
              <li>
                <p>Mejoras la economía de decenas de personas y familias que producen con mucho amor</p>
              </li>
            </ul>
          </div>
        </section>
        <section className="container quienes-somos">
          <div className="wrapper">
            <h1>¿Quienes somos?</h1>
            <div className="quienes-somos-primary">
              <p>
                Somos ComeS, una plataforma de alimentación sustentable que conecta a pequeños productores de alimentos
                con tiendas de alimentación.
              </p>
            </div>
            <div className="cards-container">
              <div className="card">
                <div className="card-img">
                  <Image
                    src={'/Apicultor.jpg'}
                    alt=""
                    width={0}
                    height={0}
                    layout="fill"
                    sizes="50vw"
                    objectFit="cover"
                    priority
                  />
                </div>
                <p className="card-text">
                  Contamos con una red de productores de alimentos desde la región de O´Higgins a la Araucanía. Venimos
                  trabajando hace años para mejorar la llegada de sus productos a los consumidores, bajo principios del
                  comercio justo y ahora, los tenemos para ti!
                </p>
              </div>
              <div className="card">
                <div className="card-img">
                  <Image
                    src={'/Productora.jpg'}
                    alt=""
                    width={0}
                    height={0}
                    layout="fill"
                    sizes="50vw"
                    objectFit="cover"
                  />
                </div>
                <p className="card-text">
                  Nuestro propósito es fomentar un sistema de alimentación que sea más sustentable, lo hacemos
                  acercándote los mejores alimentos… productos artesanales, saludables, sustentables, producidos por
                  emprendedores, familias y pequeñas empresas.
                </p>
              </div>
              <div className="card">
                <div className="card-img">
                  <Image
                    src={'/Productores.jpg'}
                    alt=""
                    width={100}
                    height={100}
                    layout="fill"
                    objectFit="cover"
                    sizes="50vw"
                    objectPosition={'40% 60%'}
                  />
                </div>
                <p className="card-text">
                  Uniéndote a esta red, estarás optimizando los pedidos de tu tienda, y además estarás apoyando a
                  mejorar la economía de decenas de personas.
                </p>
              </div>
            </div>
            <div className="quienes-somos-primary">
              <p>Todos los productos cuentan con formalización y cumplen con los requisitos para trabajar con ComeS.</p>
            </div>
          </div>
        </section>
        <section className="container mid-section bg-secondary como-funciona">
          <div className="wrapper">
            <h1>¿Cómo funciona?</h1>
            <ul className="mid-section-list">
              <li>
                <p>Ingresa al catálogo de productos</p>
              </li>
              <li>
                <p>Puedes ver los precios, mínimos de compra y quién produce los alimentos</p>
              </li>
              <li>
                <p>Selecciona los productos, solicita tu pedido en un solo lugar</p>
              </li>
              <li>
                <p>Nosotros nos encargamos de hacértelos llegar y de facturar</p>
              </li>
            </ul>

            <p>
              <b>Así de fácil y simple</b>
            </p>
          </div>
        </section>
        <section className="consulta">
          <div className="wrapper">
            <h1>
              ¿Tienes consultas?
              <br /> Contáctanos
            </h1>
            <button className="whatsapp-btn" onClick={() => window.open(sendWhatsApp())}>
              <Icon style={{ fontSize: '3rem', color: 'var(--light)' }}>whatsapp</Icon>
            </button>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrapper">
          <p>© 2022 ComeS. Todos los derechos reservados.</p>
        </div>
      </footer>
      <style jsx>
        {`
          main {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
          }
          p {
            margin: 0;
            font-size: 1.175rem;
          }
          .hero {
            height: 40vh;
            background: linear-gradient(#000000bb, #55555533), url('/hero.jpg') no-repeat;
            background-size: cover;
            background-position: 0% 20%;
            color: var(--light);
            padding: 1.5rem;
            text-align: center;
          }

          .hero .wrapper {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 1.5rem;
          }

          .wrapper {
            padding: 2.5rem 1.5rem;
            display: flex;
            flex-direction: column;
            gap: 2rem;
          }
          .container h1 {
            margin: 0;
          }
          .mid-section {
            background: linear-gradient(#8ac541ee, #8ac541ee), url(/FondoTestimonio.jpg);
            background-attachment: fixed;
            color: var(--light);
          }
          .mid-section p {
            font-size: 1.25rem;
            text-align: center;
          }
          ul {
            list-style: none;
            counter-reset: li;
            padding: 0;
            margin: 0;
          }
          li {
            display: flex;
            align-items: center;
          }

          li:not(:last-child) {
            margin-bottom: 1.5rem;
          }
          li p {
            flex: 1;
            margin: 0;
          }

          section.container.te-invitamos {
            text-align: center;
            background: linear-gradient(#ffffffee, #ffffffee), url(/FondoTestimonio.jpg);
            background-attachment: fixed;
            padding: 2rem 1rem;
          }
          .te-invitamos .wrapper {
            height: 100%;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            align-items: center;
          }

          section.container.te-invitamos p {
            margin: 0;
          }

          :not(.como-funciona).mid-section-list li:before {
            content: '';
            background: url('/tick6.svg') no-repeat center;
            background-size: 2.5rem;
            border-radius: 0;
            width: 3rem;
            height: 3rem;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: 'Isidora';
            margin-right: 1rem;
          }

          .mid-section-list li p {
            text-align: left;
          }

          .bg-secondary {
            background: linear-gradient(#f69223ee, #f69223ee), url(/FondoTestimonio.jpg);
            background-attachment: fixed;
          }
          .quienes-somos-primary p {
            margin: 0;
            font-weight: bold;
            font-size: 1.175rem;
            text-align: center;
            width: 60%;
            margin: auto;
          }
          .quienes-somos-primary:last-child {
            margin-top: 1rem;
          }
          .cards-container {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
          }
          .card {
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }

          .card p {
            margin: 0;
          }

          .card-img {
            height: 300px;
            width: 100%;
            background-color: var(--secondary);
            position: relative;
          }

          .img-container {
            width: 120px;
            height: 120px;
            margin-right: 1rem;
          }

          .beneficios li {
            background: var(--light);
            padding: 1rem;
            border-radius: 0.5rem;
            border: 1px solid var(--light-gray);
          }

          .beneficios li p {
            font-size: 1rem;
          }

          .como-funciona ul {
            counter-reset: li;
          }
          .como-funciona ul li::before {
            counter-increment: li;
            content: counter(li);
            width: 2.5rem;
            height: 2.5rem;
            background: var(--primary);
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 1.25rem;
            font-size: 1.5rem;
            margin-right: 1rem;
          }

          .como-funciona p:not(li p)::before,
          .como-funciona p:not(li p)::after {
            content: url(/tick6.svg);
            width: 2rem;
            height: 2rem;
            display: inline-block;
            margin: 0 0.5rem;
          }

          .consulta h1 {
            margin: 0;
          }
          .consulta {
            text-align: center;
          }
          .whatsapp-btn {
            background-color: var(--primary);
            border: none;
            width: fit-content;
            align-self: center;
            padding: 1rem;
            border-radius: 3rem;
          }

          .whatsapp-btn:hover {
            opacity: 0.9;
            cursor: pointer;
          }
          footer {
            background-color: var(--dark);
            color: var(--light);
          }
          footer .wrapper {
            text-align: center;
          }

          @media (min-width: 800px) {
            ul {
              columns: 2;
            }
            li {
              break-inside: avoid;
            }

            .wrapper {
              width: 90%;
              max-width: 1200px;
              margin: auto;
              padding: 2rem 0;
            }

            .card {
              flex-direction: row;
              align-items: center;
            }
            .card:nth-child(even) {
              flex-direction: row-reverse;
              text-align: right;
            }

            .card-img {
              width: 300px;
              height: 150px;
            }

            .card-text {
              flex: 1;
            }

            section h1 {
              text-align: center;
              margin-top: 0;
            }

            .img-container {
              width: 200px;
              height: 200px;
              margin-right: 1rem;
            }
            .beneficios li {
              padding: 0 1.5rem;
            }
            .beneficios li p {
              font-size: 1.175rem;
            }
          }
        `}
      </style>
    </div>
  )
}
