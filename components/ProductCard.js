import QtyBox from './atoms/QtyBox'
import CardPrice from './atoms/CardPrice'
import ProductStamp from './atoms/ProductStamp'
import QtyAddCart from './QtyAddCart'
import Image from 'next/image'
import DetailsProduct from './atoms/DetailsProduct'
import Link from 'next/link'
import { useState } from 'react'

function ProductCard({ product, addItem, removeItem, cartItems, addItemInput }) {
  // Estado que muestra y esconde la información mas detallada del producto
  const [show, setShow] = useState(true)

  // información enviada a DetailsProduct (componente tarjeta que se despliega al cliquear el icono de información)
  const PriceProduct = '$' + new Intl.NumberFormat('de-DE').format(product.wholesale_unit_price)
  const saleFormat = product.sale_format
  const suggestedSalePrice = '$' + new Intl.NumberFormat('de-DE').format(product.suggested_sale_price)
  const price_package = '$' + new Intl.NumberFormat('de-DE').format(product.price_package)

  return (
    <>
      <div className="ProductCard">
        <div className="generalInfoProduct">
          <div className="imgContainer">
            <Link href={`/product/${product.slug}`}>
              <a>
                <Image
                  src={`${process.env.NEXT_PUBLIC_IMAGES_PATH}/${product.image[0] ? product.image[0].file_image : 'imagen_no_disponible.jpg'}`}
                  width={110}
                  height={150}
                  alt="Imagen producto"></Image>
              </a>
            </Link>
          </div>

          <div className="ProductCardInfo">
            <Link href={`/product/${product.slug}`}>
              <a>
                <h2>{product.name}</h2>
              </a>
            </Link>
            <a className="links" href="#">
              {product.producer.brand_name}
            </a>
            <div className="containerInfoProduct">
              <ProductStamp width="15" />
              <QtyBox product={product}/>
            </div>
            <div className="containerInfoProduct">
              <CardPrice show={show} setShow={setShow} PriceProduct={price_package} />
              <QtyAddCart
                addItem={addItem}
                removeItem={removeItem}
                product={product}
                cartItems={cartItems}
                addItemInput={addItemInput}
              />
            </div>
          </div>
        </div>
        {show === false && (
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
            <DetailsProduct
              text={'Compra mínima iva incluido'}
              minPurchase={price_package}
              align={'flex-end'}
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
          padding: 1rem;
          min-height: 15rem;
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
            padding: 0rem 1rem;
            min-height: 15rem;
          }
          .ProductCardInfo {
            min-height: 14rem;
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
