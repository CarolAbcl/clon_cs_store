import Image from 'next/image'
import Link from 'next/link'
import { BurgerButton, CartButton } from './atoms/buttons'
import logo from '../public/ComeS-02Sinbajada-01.svg'
import { useEffect, useState } from 'react'
import { Icon } from '@material-ui/core'

const SCROLL_BREAK = 4

function Navbar({ totalItems }) {
  const [show, setShow] = useState(false)
  const [isNavbarFixed, setIsNavbarFixed] = useState(false)

  const changePosition = () => {
    const { scrollY } = window
    scrollY >= SCROLL_BREAK ? setIsNavbarFixed(true) : setIsNavbarFixed(false)
  }
  useEffect(() => {
    changePosition()
    window.addEventListener('scroll', changePosition)
  }, [isNavbarFixed])

  const handlerSlideUp = () => window.scrollTo(0, 0)

  return (
    <>
      <div className={isNavbarFixed ? 'navbar fixed-active' : 'navbar'}>
        <BurgerButton toggleMenu={(e) => setShow(e.target.checked)} />
        <div className="logo">
          <Image src={logo} alt="logo" width={'120px'} height={'40px'} layout="responsive" sizes="50vw" />
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
        <CartButton totalItems={totalItems} className="hidden" />
        <span className="go-up" onClick={handlerSlideUp}>
          <Icon>keyboard_arrow_up</Icon>
        </span>
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
            z-index: 10;
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
          }

          .go-up {
            display: ${isNavbarFixed ? 'block' : 'none'};
            padding: 10px;
            background: #7b61ff;
            color: #fff;
            cursor: pointer;
            position: fixed;
            bottom: 20px;
            right: 82%;
            border-radius: 10px;
            animation: showGoUp 0.3s linear forwards;
          }

          .fixed-active {
            position: fixed;
            background-color: #fff;
            box-shadow: 1px 2px 10px -6px rgb(0 0 0 / 15%);
            z-index: 10;
            top: 0;
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

          @keyframes showGoUp {
            from {
              display: none;
              background-color: transparent;
            }
            to {
              display: block;
              background-color: #7b61ff;
            }
          }

          @media (min-width: 600px) {
            .navbar {
              padding: 1rem 4rem;
              display: flex;
              align-items: flex-start;
              height: 100px;
            }

            .go-up {
              display: ${isNavbarFixed ? 'block' : 'none'};
              padding: 1rem;
              color: #fff;
              cursor: pointer;
              position: fixed;
              bottom: 20px;
              right: 15px;
              animation: showGoUp 0.3s linear forwards;
            }

            .fixed-active {
              padding: 0.5rem 4rem;
              position: fixed;
              height: 70px;
              background-color: #fff;
              box-shadow: 1px 2px 10px -6px rgb(0 0 0 / 15%);
              z-index: 10;
            }

            .logo {
              width: 10rem;
            }

            .content {
              position: static;
              display: flex;
              margin: 0;
              background: transparent;
              width: 100%;
              box-shadow: none;
              justify-content: space-around;
            }

            ul {
              padding: 0;
              margin: 0;
              list-style: none;
              display: flex;
              justify-content: space-evenly;
              width: 100%;
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
