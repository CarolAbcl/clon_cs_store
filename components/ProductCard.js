import QtyBox from './atoms/QtyBox'
import CardPrice from './atoms/CardPrice'
import ProductStamp from './atoms/ProductStamp'
import QtyAddCart from './QtyAddCart'
import Image from 'next/image'
import DetailsProduct from './atoms/DetailsProduct'
import { useState } from 'react'

function ProductCard() {
  // Estado que muestra y esconde la información mas detallada del producto
  const [show, setShow] = useState(true)
  // Estado para aumentar y disminuir cantidad de producto
  const [countProduct, setCountProduct] = useState(0)

  return (
    <>
      <div className="ProductCard">
        <div className="generalInfoProduct">
          <div className="imgContainer">
            <Image
              src={'https://losangeles.comes.cl/wp-content/uploads/2019/07/MAji2DLC.jpg'}
              width={110}
              height={150}
              alt="Imagen producto"></Image>
          </div>
          <div className="ProductCardInfo">
            <h2>Nombre del producto</h2>
            <a className="links" href="#">
              Nombre del productor
            </a>
            <div className="containerInfoProduct">
              <ProductStamp width="15" />
              <QtyBox />
            </div>
            <div className="containerInfoProduct">
              <CardPrice show={show} setShow={setShow} />
              <QtyAddCart
                value={countProduct}
                fontSize={'12px'}
                countProduct={countProduct}
                setCountProduct={setCountProduct}
              />
            </div>
          </div>
        </div>
        {show === false && (
          <div className="containerDetailsProduct">
            <hr></hr>
            <DetailsProduct
              text={'Precio por unidad al por mayor iva incluido'}
              price={'3.450'}
              align={'flex-start'}
              width={50}
            />
            <DetailsProduct text={'Unidades por caja'} value={'6'} align={'flex-end'} width={50} />
            <hr />
            <DetailsProduct text={'Precio sugerido de venta'} price={'3.450'} align={'flex-start'} width={50} />
            <DetailsProduct text={'Compra mínima iva incluido'} price={'3.450'} align={'flex-end'} width={50} />
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
          margin-left: 3%;
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
        @media (min-width: 480px) {
          .ProductCard {
            width: 48%;
          }
        }
      `}</style>
    </>
  )
}

export default ProductCard
