import Icon from '@material-ui/core/Icon'
import QtyBox from './atoms/QtyBox'
import CardPrice from './atoms/CardPrice'
import ProductStamp from './atoms/ProductStamp'
import QtyAddCart from './QtyAddCart'
import Image from 'next/image'
import DetailsProduct from './atoms/DetailsProduct'
import Link from 'next/link'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteItemCart } from '../store/actions/cartAction'
import priceFormat from '../helpers/priceFormat'
import purchaseFormat from '../helpers/purchaseFormat'

function ProductCard({ product, inCart }) {
  // Estado que muestra y esconde la información mas detallada del producto
  const [show, setShow] = useState(true)
  const dispatch = useDispatch()

  const subTotal_price = inCart ? priceFormat(product.qty * product.price_package) : 0

  const {
    min_producer_purchase,
    type_sale: { type },
  } = product.producer

  return (
    <>
      <div className="ProductCard">
        {inCart && (
          <Icon
            style={{
              color: 'var(--gray)',
              width: '100%',
              textAlign: 'right',
              cursor: 'pointer',
            }}
            onClick={() => dispatch(deleteItemCart(product))}>
            delete
          </Icon>
        )}
        <div className="generalInfoProduct">
          <div className="imgContainer">
            <Link href={`/product/${product.slug}`}>
              <a>
                {product.image[0] ? (
                  product.image.map(
                    (image) =>
                      image.isMain && (
                        <Image
                          src={`${process.env.NEXT_PUBLIC_IMAGES_PATH}/${image.file_image}`}
                          width={110}
                          height={150}
                          alt={image.alt}
                          title={image.name_image}
                          key={image.ID_image}></Image>
                      )
                  )
                ) : (
                  <Image
                    src={`${process.env.NEXT_PUBLIC_IMAGES_PATH}/imagen_no_disponible.jpg`}
                    width={110}
                    height={150}
                    alt="Imagen no disponible"
                    title={product.name}></Image>
                )}
              </a>
            </Link>
          </div>

          <div className="ProductCardInfo">
            <div className="ProductName">
              <Link href={`/product/${product.slug}`}>
                <a style={{ textAlign: 'left' }}>
                  <h2>{product.name}</h2>
                </a>
              </Link>
            </div>

            <p className="links" href="#">
              {product.producer.brand_name}
            </p>
            <div className="minPurshase">
              <p className="textMinPurshase">
                Pedido mín. del productor: &nbsp;
                <span className="secondary">{purchaseFormat(min_producer_purchase, type, true)}</span>
              </p>
            </div>
            {!inCart && (
              <div className="containerInfoProduct">
                <ProductStamp width="15" />
                <QtyBox product={product} />
              </div>
            )}
            <div className="containerInfoProduct">
              <CardPrice show={show} setShow={setShow} product={product} inCart={inCart} />
              <QtyAddCart product={product} />
            </div>
          </div>
        </div>
        {inCart && (
          <div className="containerSubtotal">
            <div className="hidden">
              <a className="links secondary" href="#">
                Agregar nota al pedido
              </a>
            </div>
            <div>
              <p className="subtotal">
                Subtotal: <span className="secondary subtotal">{subTotal_price}</span>
              </p>
            </div>
          </div>
        )}
        {!show && (
          <>
            <div className="containerDetailsProduct">
              <hr></hr>
              <DetailsProduct
                text={'Precio por unidad al por mayor iva incluido'}
                product={product}
                align={'flex-start'}
                width={50}
              />
              <DetailsProduct text={'Unidades por caja'} product={product} align={'flex-end'} width={50} />
              {product.suggested_sale_price != (0 || null) ? (
                <>
                  <hr />
                  <DetailsProduct text={'Precio sugerido de venta'} product={product} align={'flex-start'} width={50} />
                </>
              ) : (
                ''
              )}
            </div>
            <div className="infoMinPurshase">
              <p className="links" href="#">
                <div className="TextinfoMinPurshase">
                  El pedido mínimo para este productor es de {purchaseFormat(min_producer_purchase, type, true)}.
                </div>
              </p>
            </div>
          </>
        )}
      </div>

      <style jsx>{`
        .ProductCard {
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          background-color: var(--light);
          box-shadow: 3px 2px 12px -5px rgba(0, 0, 0, 0.5);
          border-radius: 8px;
          width: 100%;
          justify-content: center;
          align-items: stretch;
          flex-shrink: 1;
          padding: 1rem;
          min-height: ${inCart ? '14rem' : '15rem'};
          position: relative;
        }
        .ProductCard.tight {
          height: 50%;
        }
        .generalInfoProduct {
          display: flex;
          flex-direction: row;
          gap: 0.5rem;
          align-items: center
          flex: 1;
        }

        .ProductCardInfo {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.5rem;
          flex: 1;
        }
        div {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }
        .containerInfoProduct {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: stretch;
          gap: 0.5rem;
          width: 100%;
        }
        #productDetails {
          display: none;
          flex-direction: row;
          flex-wrap: wrap;
        }
        .imgContainer {
          border-radius: 8px;
          display: block;
        }
        .containerDetailsProduct {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          align-items: flex-start;
          padding-bottom: 0.5rem;
        }

        .containerSubtotal{
          padding-top: 1rem;
          border-top: 1px solid var(--light-gray);
          margin-top: 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 0.5rem;
        }
        .containerSubtotal p, .containerSubtotal a{
          margin: 0;
        }

        .containerSubtotal div:last-child{
          text-align: right;
          flex:1;
        }
        .containerSubtotal div:first-child{
          flex:2;
        }
        hr {
          width: 100%;
          height: 1px;
          color: var(--dark-gray);
          opacity: 10%;
        }
        h2 {
          margin: 0.5rem 0;
          font-size: 1rem;
        }

        .subtotal{
          font-size: 18px;
        }
         .textMinPurshase{ 
          font-size: 0.875rem; 
          width: 100%;
          margin: 0;
        } 
        .minPurshase{ 
          display: flex; 
          flex-direction: column; 
          align-items: flex-start 
        } 
         .infoMinPurshase{ 
          padding: 1rem 0rem; 
        } 
        .TextinfoMinPurshase{ 
          background-color: var(--secondary);
          width: 100%;
          color: white; 
          padding: 0.5rem; 
          left: 0; 
          bottom: 0; 
          position: absolute; 
          border-radius: 0px 0px 8px 8px;
          text-align: center; 
          font-size: 0.875rem; 
        } 
        
        @media (min-width: 480px) {
          .ProductCard {
            flex: 1;
            min-width: 350px;
            max-width: 400px;
          }
        }

        @media (min-width: 1265px) {
          .ProductCard{
            ${inCart && 'display:none'}
          }
          h2 {
            text-overflow: ellipsis;
            overflow: hidden;
            -webkit-line-clamp: 2;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            font-size: 1.25rem;
          }
          .ProductCard {
            padding: ${inCart ? '1rem' : '0.5rem 1rem'};
            min-height: ${inCart ? '14rem' : '16rem'};
          }
          .ProductCardInfo {
            min-height: ${inCart ? '9rem' : '14rem'};
          }
          .containerDetailsProduct {
            padding: 1.5rem 0rem 0.5rem 0rem;
          }
          .minPurshase{
            flex-direction: row;
          }
          .infoMinPurshase{
            padding: 1.5rem 0rem; 
          }
          .TextinfoMinPurshase{
            padding:  0.75rem 1.375rem; 
          }
        }
      `}</style>
    </>
  )
}

export default ProductCard
