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

function ProductCard({ product, inCart }) {
  // Estado que muestra y esconde la información mas detallada del producto
  const [show, setShow] = useState(true)
  const dispatch = useDispatch()
  // información enviada a DetailsProduct (componente tarjeta que se despliega al cliquear el icono de información)
  const PriceProduct = '$' + new Intl.NumberFormat('de-DE').format(product.wholesale_unit_price)
  const saleFormat = product.sale_format
  const suggestedSalePrice = '$' + new Intl.NumberFormat('de-DE').format(product.suggested_sale_price)
  const price_package = '$' + new Intl.NumberFormat('de-DE').format(product.price_package)
  const subTotal_price = inCart ? '$' + new Intl.NumberFormat('de-DE').format(product.qty * product.price_package) : 0

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
                <Image
                  src={`${process.env.NEXT_PUBLIC_IMAGES_PATH}/${
                    product.image[0] ? product.image[0].file_image : 'imagen_no_disponible.jpg'
                  }`}
                  width={110}
                  height={150}
                  alt="Imagen producto"></Image>
              </a>
            </Link>
          </div>

          <div className="ProductCardInfo">
            <div className="ProductName">
              <Link href={`/product/${product.slug}`}>
                <a>
                  <h2>{product.name}</h2>
                </a>
              </Link>
            </div>

            <a className="links" href="#">
              {product.producer.brand_name}
            </a>
            <div className="minPurshase">
              <div className="textMinPurshase">Pedido mín. de productor: &nbsp;</div>

              <span className="secondary"> $60.000 </span>
            </div>
            {!inCart && (
              <div className="containerInfoProduct">
                <ProductStamp width="15" />
                <QtyBox product={product} />
              </div>
            )}
            <div className="containerInfoProduct">
              <CardPrice show={show} setShow={setShow} PriceProduct={price_package} inCart={inCart} />
              <QtyAddCart product={product} />
            </div>
          </div>
        </div>
        {inCart && (
          <div className="containerSubtotal">
            <div>
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
          <div className="containerDetailsProduct">
            <hr></hr>
            <DetailsProduct
              text={'Precio por unidad al por mayor iva incluido'}
              PriceProduct={PriceProduct}
              align={'flex-start'}
              width={50}
            />
            <DetailsProduct text={'Unidades por caja'} saleFormat={saleFormat} align={'flex-end'} width={50} />
            <hr />
            <DetailsProduct
              text={'Precio sugerido de venta'}
              suggestedSalePrice={suggestedSalePrice}
              align={'flex-start'}
              width={50}
            />
          </div>
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
          padding: 1rem 0.5rem;
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
          flex-wrap: wrap;
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

        } 

        .minPurshase{ 

          display: flex; 

          flex-direction: column; 

          align-items: flex-start 

        } 
        @media (min-width: 480px) {
          .ProductCard {
            flex: 1;
            min-width: 350px;
            max-width: 400px;
          }
        }

        @media (min-width: 1265px) {
          h2 {
            text-overflow: ellipsis;
            overflow: hidden;
            -webkit-line-clamp: 2;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            font-size: 1.25rem;
          }
          .ProductCard {
            padding: ${inCart ? '1rem' : '0rem 1rem'};
            min-height: ${inCart ? '14rem' : '15rem'};
          }
          .ProductCardInfo {
            min-height: ${inCart ? '9rem' : '14rem'};
          }
          .containerDetailsProduct {
            padding: 1.5rem 0rem 0.5rem 0rem;
          }
        }
      `}</style>
    </>
  )
}

export default ProductCard
