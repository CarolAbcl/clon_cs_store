import QtyBox from './atoms/QtyBox'
import CardPrice from './atoms/CardPrice'
import ProductStamp from './atoms/ProductStamp'
import QtyAddCart from './QtyAddCart'
import Image from 'next/image'
import DetailsProduct from './atoms/DetailsProduct'
import { useState } from 'react'

function ProductCard({
  product = {
    ID_product: '1',
    name: 'Kombucha te blanco lavanda beterraga 330 cc',
    wholesale_unit_price: 1488,
    sale_format: 24,
    description:
      'El antiguo elixir de Oriente, asi le llaman a la Kombucha, una bebida saludable con propiedades beneficiosas para tu vida.',
    duration: 12,
    suggested_sale_price: 1990,
    min_purchase: 1,
    benefit: 'Mejora la Flora intestinal',
    conservation: 'lugar fresco y seco',
    stock_quantity: 1,
    offer_price: null,
    delivery_time: 10,
    modification_date: null,
    image: [
      {
        ID_image: '1',
        file_image: 'MKVioleta.jpg',
        name_image: 'Kombucha Violeta',
        alt: 'kombucha lavanda',
        isMain: true,
        ID_product: '1',
      },
    ],
    producer: {
      ID_producer: '1',
      brand_name: 'Moksha Kombucha',
    },
    stock: {
      ID_stock: '1',
      status: 'En stock',
    },
  },
}) {
  // Estado que muestra y esconde la información mas detallada del producto
  const [show, setShow] = useState(true)
  // Estado para aumentar y disminuir cantidad de producto
  const [countProduct, setCountProduct] = useState(0)

  // información enviada a DetailsProduct (componente tarjeta que se despliega al cliquear el icono de información)
  const PriceProduct = '$' + new Intl.NumberFormat('de-DE').format(product.wholesale_unit_price)
  const saleFormat = product.sale_format
  const suggestedSalePrice = '$' + new Intl.NumberFormat('de-DE').format(product.suggested_sale_price)
  const minPurchase = product.min_purchase

  return (
    <>
      <div className="ProductCard">
        <div className="generalInfoProduct">
          {/*product.image.map((image) => (
            <div className="imgContainer" key={product.ID_product}>
              <Image
                src={'https://comeschile.cl/uploads/products/' + image.file_image}
                width={110}
                height={150}
                alt="Imagen producto"></Image>
            </div>
          ))*/}
          <div className="imgContainer">
            <Image
              src={`${process.env.NEXT_PUBLIC_IMAGES_PATH}/${product.image[0].file_image}`}
              width={110}
              height={150}
              alt="Imagen producto"></Image>
          </div>

          <div className="ProductCardInfo">
            <h2>{product.name}</h2>
            <a className="links" href="#">
              Nombre del productor
            </a>
            <div className="containerInfoProduct">
              <ProductStamp width="15" />
              <QtyBox product={product} />
            </div>
            <div className="containerInfoProduct">
              <CardPrice show={show} setShow={setShow} PriceProduct={PriceProduct} />
              <QtyAddCart value={countProduct} countProduct={countProduct} setCountProduct={setCountProduct} />
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
              minPurchase={minPurchase}
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
          box-shadow: 5px 3px 16px -6px rgba(0, 0, 0, 0.15);
          border-radius: 8px;
          width: 100%;
          margin: 1%;
          justify-content: center;
          align-items: stretch;
          flex-shrink: 1;
          height: 50%;
          padding: 0rem 1rem;
        }
        .generalInfoProduct {
          display: flex;
          flex-direction: row;
        }
        .ProductCardInfo {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          margin-left: 0.5rem;
          margin-bottom: 0.7rem;
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
          text-overflow: ellipsis;
          overflow: hidden;
          -webkit-line-clamp: 2;
          display: -webkit-box;
          -webkit-box-orient: vertical;
        }
        @media (min-width: 480px) {
          .ProductCard {
            flex:1;
            min-width: 600px;
          }
        }
      `}</style>
    </>
  )
}

export default ProductCard
