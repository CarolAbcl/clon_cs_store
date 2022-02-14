import SearchBar from '../components/atoms/SearchBar'
import ProductCard from '../components/ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import CardsGroup from '../components/CardsGroup'
import { Button, ButtonSecondary } from '../components/atoms/buttons'
import { Icon } from '@material-ui/core'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import ProductCardDesktop from '../components/ProductCardDesktop'
import priceFormat from '../helpers/priceFormat'
import purchaseFormat from '../helpers/purchaseFormat'
import { sendOrder } from '../helpers/sendOrder'
import AddNoteOrder from '../components/AddNoteOrder'
import { clearCart } from '../store/actions/cartAction'
import { openModal } from '../store/actions/modalAction'

function Carrito() {
  const router = useRouter()

  const { cart, producers } = useSelector((state) => state)
  const noteOrder = useSelector((state) => state.note)
  // monto total de carrito sin formato
  const totalCart = cart.reduce((a, cur) => a + cur.price_package * cur.qty, 0)
  // monto total neto de carrito sin formato
  const totalNeto = (totalCart / 1.19).toFixed(0)
  // monto total iva de carrito sin formato
  const totalTax = (totalNeto * 0.19).toFixed(0)

  const [cartLength, setcartLength] = useState(0)

  useEffect(() => {
    setcartLength(cart.length)
  }, [cart])

  const dispatch = useDispatch()
  return (
    <>
      <div className="container">
        <div className="header">
          <h2 className="primary">CARRITO</h2>
          <SearchBar />
        </div>
        <hr />
        <div className="containerCart">
          {cartLength !== 0 ? (
            <>
              <div className="containerProducers">
                {producers.map((producer) => (
                  <div key={producer.producerInfo.ID_producer} className="containerCard">
                    <div className="containerCardMobile">
                      <div className="producerInfo">
                        <h3>{producer.producerInfo.brand_name}</h3>
                        {producer.remaining !== 0 && (
                          <div className="remainingProducts">
                            <p>
                              Te falta {purchaseFormat(producer.remaining, producer.producerInfo.type_sale.type)} para
                              cumplir con el pedido mínimo del productor
                            </p>
                            <Link href="/catalogo">
                              <a className="links">Completar</a>
                            </Link>
                          </div>
                        )}
                      </div>
                      <CardsGroup inCart>
                        {producer.products.map((product) => (
                          <ProductCard key={product.ID_product} product={product} inCart />
                        ))}
                      </CardsGroup>
                    </div>
                    <div className="containerCardDesktop">
                      <div className="producerInfo">
                        <h3>{producer.producerInfo.brand_name}</h3>
                        {producer.remaining !== 0 && (
                          <div className="remainingProducts">
                            <p>
                              Te falta {purchaseFormat(producer.remaining, producer.producerInfo.type_sale.type)} para
                              cumplir con el pedido mínimo del productor
                            </p>
                            <Link href="/catalogo">
                              <a className="links">Completar</a>
                            </Link>
                          </div>
                        )}
                      </div>
                      {producer.products.map((product) => (
                        <ProductCardDesktop key={product.ID_product} product={product} inCart />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="containerTotalMobile">
                <div className="total">
                  <p className="font125">
                    Neto: <span className="font125 ">{priceFormat(totalNeto)}</span>
                  </p>
                  <p className="font125">
                    IVA: <span className="font125 ">{priceFormat(totalTax)}</span>
                  </p>
                  <p className="font125 amountTotal">
                    Subtotal: <span className="font125 secondary">{priceFormat(totalCart)}</span>
                  </p>
                  <p className="font125">
                    Despacho: <span className="font125">{priceFormat(0)}</span>
                  </p>
                  <p className="textSmall"> - Despacho gratis en Regiones del Biobio y Ñuble</p>
                  <p className="font125 amountTotal">
                    Total: <span className="font125 secondary">{priceFormat(totalCart)}</span>
                  </p>
                </div>
                <AddNoteOrder />
                <ButtonSecondary value="Seguir comprando" fontSize="1rem" onClick={() => router.push('/catalogo')} />
                <div className="actionButton">
                  <Button
                    value="Cancelar"
                    color="var(--secondary)"
                    onClick={() => dispatch(openModal(open, 'CancelcartModal'))}
                  />
                  <Button
                    value="Confirmar"
                    color="var(--primary)"
                    disabled={producers.some((producer) => producer.complete == false)}
                    onClick={() => {
                      window.open(sendOrder(producers, noteOrder))
                    }}
                  />
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
                    Neto: <span className="font125">{priceFormat(totalNeto)}</span>
                  </p>
                  <p className="font125">
                    IVA: <span className="font125">{priceFormat(totalTax)}</span>
                  </p>
                  <p className="font125 amountTotal">
                    Subtotal: <span className="font125 secondary">{priceFormat(totalCart)}</span>
                  </p>
                  <p className="font125">
                    Despacho: <span className="font125">{priceFormat(0)}</span>
                  </p>
                  <p className="textSmall"> - Despacho gratis en Regiones del Biobio y Ñuble</p>
                  <p className="font125 amountTotal">
                    Total: <span className="font125 secondary">{priceFormat(totalCart)}</span>
                  </p>
                </div>
                <AddNoteOrder />
                <ButtonSecondary value="Seguir comprando" fontSize="1rem" onClick={() => router.push('/catalogo')} />
                <div className="actionButton">
                  <Button
                    value="Cancelar"
                    color="var(--secondary)"
                    onClick={() => dispatch(openModal(open, 'CancelcartModal'))}
                  />
                  <Button
                    value="Confirmar"
                    color="var(--primary)"
                    disabled={producers.some((producer) => producer.complete == false)}
                    onClick={() => {
                      window.open(sendOrder(producers, noteOrder))
                    }}
                  />
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
                No has agregado productos al carrito. Ingresa al
                <Link href="/catalogo">
                  <a className="primary" style={{ fontSize: 'inherit' }}>
                    {' '}
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

          h3 {
            margin: 1.5rem;
            text-align: left;
          }
          hr {
            margin-top: 1.5rem;
            margin-bottom: 2rem;
            border: none;
            border-bottom: 1px solid var(--light-gray);
          }
          .total {
            text-align: right;
            padding: 0.5rem;
            width: 100%;
          }
          .font125 {
            font-size: 1.25rem !important;
            margin: 0.2rem;
            display: flex;
            justify-content: space-between;
          }
          .amountTotal {
            border-top: 1px solid var(--light-gray);
            padding-top: 0.5rem;
            margin-top: 0.5rem;
          }
          .containerCardMobile {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
          }
          .containerCardDesktop {
            display: none;
            margin-bottom: 0.5em;
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
          .remainingProducts {
            display: flex;
            gap: 0.5rem;
            align-items: center;
            background-color: #ffffe3;
            border-radius: 2rem;
            margin: 1rem 0rem;
            overflow: hidden;
          }

          .remainingProducts p,
          .remainingProducts .links {
            margin: 0;
            padding: 0.5rem 1.5rem;
            text-align: center;
          }

          .remainingProducts .links {
            background-color: var(--secondary);
            color: white;
            text-decoration: none;
            outline: none;
            margin: 0rem 1rem;
          }
          .textSmall {
            margin: 0%;
            font-size: 0.825rem;
            text-align: left;
          }

          @media (min-width: 800px) {
            .containerCart {
              display: flex;
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
              flex-direction: column;
              align-items: flex-start;
              flex-wrap: nowrap;
              justify-content: space-between;
              width: 100%;
            }
            .containerCard {
              width: 100%;
            }
            .containerTotalDesktop {
              display: flex;
              flex-direction: column;
              align-items: center;
              flex-wrap: nowrap;
              justify-content: space-between;
              background-color: var(--light);
              box-shadow: 3px 2px 12px -5px rgba(0, 0, 0, 0.5);
              border-radius: 8px;
              width: 36rem;
              height: fit-content;
              padding: 2rem;
              position: sticky;
              top: 6rem;
              margin-left: 2rem;
            }
            .remainingProducts {
              display: flex;
              gap: 0.5rem;
              align-items: center;
              background-color: rgb(255, 255, 227);
              border-radius: 2rem;
              margin-top: 0.5rem;
              overflow: hidden;
            }
            .remainingProducts p,
            .remainingProducts .links {
              margin: 0;
              padding: 0.5rem 1.5rem;
            }
            .remainingProducts .links {
              background-color: var(--secondary);
              color: white;
              text-decoration: none;
              outline: none;
            }
            .containerProducers {
              display: flex;
              flex-direction: column;
              width: 90%;
            }
            .textSmall {
              text-align: left;
              margin: 0;
            }
          }
        `}
      </style>
    </>
  )
}

export default Carrito
