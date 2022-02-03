import SearchBar from '../components/atoms/SearchBar'
import ProductCard from '../components/ProductCard'
import { useSelector } from 'react-redux'
import CardsGroup from '../components/CardsGroup'
import { Button, ButtonSecondary } from '../components/atoms/buttons'
import { Icon } from '@material-ui/core'
import Link from 'next/link'
import ProductCardDesktop from '../components/ProductCardDesktop'

function Carrito() {
  const cart = useSelector((state) => state.cart)
  const total = '$' + new Intl.NumberFormat('de-DE').format(cart.reduce((a, cur) => a + cur.price_package * cur.qty, 0))
  return (
    <>
      <div className="container">
        <div className="header">
          <h2 className="primary">CARRITO</h2>
          <SearchBar />
        </div>
        <hr />
        <div className="containerCart">
          {cart.length !== 0 ? (
            <>
              <div className="containerCardMobile">
                <CardsGroup inCart>
                  {cart.map((product) => (
                    <ProductCard key={product.ID_product} product={product} inCart />
                  ))}
                </CardsGroup>
              </div>
              <div className="containerCardDesktop">
                {cart.map((product) => (
                  <ProductCardDesktop key={product.ID_product} product={product} inCart />
                ))}
              </div>
              <div className="containerTotalMobile">
                <div className="total">
                  <p className="font125">
                    Total: <span className="font125 secondary">{total}</span>
                  </p>
                </div>
                <Link href="/catalogo" passHref>
                  <ButtonSecondary value="Seguir comprando" fontSize="1rem" />
                </Link>
                <div className="actionButton">
                  <Button value="cancelar" color="var(--secondary)" />
                  <Button value="confirmar" color="var(--primary)" />
                </div>
                <div className="actionButton share">
                  <div className="center">
                    <Icon style={{ color: '#7B61FF', fontSize: '2.5rem' }}>share</Icon>
                    <p>Compartir mi carrito</p>
                  </div>
                  <div className="center">
                    <Icon style={{ color: '#7B61FF', fontSize: '2.5rem' }}>print</Icon>
                    <p>Imprimir carrito</p>
                  </div>
                </div>
              </div>
              <div className="containerTotalDesktop">
                <div className="total">
                  <p className="font125">
                    Total: <span className="font125 secondary">{total}</span>
                  </p>
                </div>
                <Link href="/catalogo" passHref>
                  <ButtonSecondary value="Seguir comprando" fontSize="1rem" />
                </Link>
                <div className="actionButton">
                  <Button value="cancelar" color="var(--secondary)" />
                  <Button value="confirmar" color="var(--primary)" />
                </div>
                <div className="actionButton share">
                  <div className="center">
                    <Icon style={{ color: '#7B61FF', fontSize: '2.5rem' }}>share</Icon>
                    <p>Compartir mi carrito</p>
                  </div>
                  <div className="center">
                    <Icon style={{ color: '#7B61FF', fontSize: '2.5rem' }}>print</Icon>
                    <p>Imprimir carrito</p>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="containerEmptyCart center">
              <Icon style={{ color: 'var(--light-gray', fontSize: '80px', marginTop: '3rem' }}>shopping_cart</Icon>
              <h2>
                No has agregado productos al carrito. Ingresa al{' '}
                <Link href="/catalogo">
                  <a className="primary" style={{ fontSize: 'inherit' }}>
                    catálogo
                  </a>
                </Link>{' '}
                para agregar.
              </h2>
            </div>
          )}
        </div>
      </div>
      <style jsx>
        {`
          .container {
            padding: 1.5rem;
          }
          .header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
            flex-wrap: nowrap;
          }
          h2 {
            font-weight: normal;
          }
          hr {
            margin-top: 1.5rem;
            margin-bottom: 2rem;
            border: none;
            border-bottom: 1px solid var(--light-gray);
          }
          .total {
            text-align: right;
            padding: 0.75rem 1rem;
            margin: 0.5rem 0;
            border-bottom: 1px solid var(--light-gray);
            border-top: 1px solid var(--light-gray);
            width: 100%;
            margin-bottom: 1.5rem;
          }
          .font125 {
            font-size: 1.25rem !important;
            margin: 0;
          }
          .containerCardMobile {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .containerCardDesktop {
            display: none;
          }
          .actionButton {
            display: flex;
            width: 100%;
            justify-content: space-evenly;
            gap: 3rem;
            margin-top: 1.5rem;
          }
          .share {
            gap: 0;
            border-top: 1px solid var(--light-gray);
            padding-top: 1.5rem;
          }
          .center {
            text-align: center;
          }
          .containerTotalMobile {
            display: block;
          }
          .containerTotalDesktop {
            display: none;
          }
          @media (min-width: 800px) {
            .containerCart {
              display: flex;
              flex-direction: row;
              justify-content: center;
            }
            .containerCardMobile {
              display: none;
            }
            .containerTotalMobile {
              display: none;
            }
            .containerCardDesktop {
              display: flex;
              flex: 3;
              flex-direction: column;
              align-items: flex-start;
              flex-wrap: nowrap;
              justify-content: space-between;
            }
            .containerTotalDesktop {
              display: flex;
              flex: 1;
              flex-direction: column;
              align-items: center;
              flex-wrap: nowrap;
              justify-content: space-between;
              background-color: var(--light);
              box-shadow: 3px 2px 12px -5px rgba(0, 0, 0, 0.5);
              border-radius: 8px;
              width: 30%;
              height: fit-content;
              padding: 2rem;
              position: fixed;
              right: 1rem;
            }
          }
        `}
      </style>
    </>
  )
}

export default Carrito
