import Image from 'next/image'
import Link from 'next/link'
import { BurgerButton, CartButton } from './atoms/buttons'

import logo from '../public/ComeS-02Sinbajada-01.svg'

function Navbar() {
  return (
    <>
      <div className="navbar">
        <BurgerButton />
        <div className="logo">
          <Image src={logo} layout="intrinsic" alt="" width={'200px'} height={'60px'} />
        </div>

        <CartButton />
      </div>
      <div className="background">
        <div className="content">
          <ul>
            <li>
              <Link href="/">
                <a>Catálogo</a>
              </Link>
              <hr />
            </li>
            <li>
              <Link href="/">
                <a>Catálogo</a>
              </Link>
              <hr />
            </li>
            <li>
              <Link href="/">
                <a>Catálogo</a>
              </Link>
              <hr />
            </li>
          </ul>
        </div>
      </div>
      <style jsx>
        {`
          .logo {
            height: 100%;
            position: relative;
          }
          .background {
            position: fixed;
            height: 100%;
            width: 100%;
            top: 0;
            left: 0;
            background-color: #00000055;
            backdrop-filter: blur(4px);
            display: none;
          }
          .content {
            width: 50%;
            height: 100%;
            background-color: var(--light);
            box-shadow: 0 0px 12px #00000055;
            border-radius: 0 12px 12px 0;
          }
          .navbar {
            height: 60px;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          ul {
            padding: 0;
            padding-top: 80px;
            margin: 0;
            list-style: none;
          }
          a {
            display: inline-block;
            width: 100%;
            text-align: center;
            font-size: 1.2rem;
            font-weight: bold;
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
        `}
      </style>
    </>
  )
}

export default Navbar
