import Image from 'next/image'
import Link from 'next/link'
import { BurgerButton, CartButton } from './atoms/buttons'

import logo from '../public/ComeS-02Sinbajada-01.svg'
import { useState } from 'react'

function Navbar({ totalItems }) {
  const [show, setShow] = useState(false)
  return (
    <>
      <div className="navbar">
        <BurgerButton toggleMenu={(e) => setShow(e.target.checked)} />
        <div className="logo">
          <Image src={logo} alt="" width={'120px'} height={'40px'} layout="responsive" sizes="50vw" />
        </div>
        <div className={`background ${show ? 'show' : ''}`}></div>
        <div className={`content ${show ? 'show' : ''}`}>
          <ul>
            <li>
              <Link href="/catalogo">
                <a>Inicio</a>
              </Link>
              <hr />
            </li>
            <li>
              <Link href="/catalogo">
                <a>Nosotros</a>
              </Link>
              <hr />
            </li>
            <li>
              <Link href="/catalogo">
                <a>Preguntas frecuentes</a>
              </Link>
              <hr />
            </li>
          </ul>
        </div>
        <CartButton totalItems={totalItems} />
      </div>
      <style jsx>
        {`
          .logo {
            width: 6rem;
          }
          .background {
            position: fixed;
            height: 100vh;
            width: 100%;
            top: 0;
            left: 0;
            backdrop-filter: blur(4px);
            display: none;
            z-index: 10;
          }
          .content {
            position: fixed;
            top: 0;
            left: 0;
            width: 60%;
            height: 100%;
            background-color: var(--light);
            box-shadow: 0 0px 12px #00000055;
            border-radius: 0 12px 12px 0;
            margin: 0 -80%;
            transition: all 0.3s;
            z-index: 20;
          }
          .background.show {
            animation: showBackground 0.3s linear forwards;
            display: block;
          }
          .background.hide {
            animation: showBackground 0.3s reverse forwards;
            display: none;
          }
          .content.show {
            margin: 0 0px;
          }
          .navbar {
            height: 60px;
            width: 100%;
            padding: 0 1.5rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            align-items: center;
          }
          ul {
            padding: 0;
            padding-top: 80px;
            margin: 0;
            list-style: none;
          }

          li {
            padding: 0 0.5rem;
          }
          a {
            display: inline-block;
            width: 100%;
            text-align: center;
            padding: 1rem 0;
            transition: all 0.3s;
          }
          hr {
            width: 70%;
            border: none;
            border-bottom: 1px solid var(--light-gray);
            margin: auto;
            transition: all 0.3s;
          }
          a:hover {
            color: var(--dark-green);
            padding: 1.5rem 0;
          }
          a:hover ~ hr {
            width: 90%;
          }

          @keyframes showBackground {
            from {
              display: none;
              background-color: transparent;
            }
            to {
              display: block;
              background-color: #00000055;
            }
          }

          @keyframes hideBackground {
            from {
              background-color: #00000055;
            }
            to {
              background-color: transparent;
            }
          }
          @media (min-width: 600px) {
            .navbar {
              padding: 3rem 4rem;
            }
            .logo {
              width: 10rem;
            }

            .content {
              position: static;
              display: inline-block;
              margin: 0;
              background: transparent;
              height: auto;
              width: 100%;
              box-shadow: none;
            }

            ul {
              padding: 0;
              margin: 0;
              list-style: none;
              display: flex;
              justify-content: space-evenly;
            }

            a {
              padding: 1rem;
            }
            a:hover {
              padding: 1rem;
            }
          }
        `}
      </style>
    </>
  )
}

export default Navbar
