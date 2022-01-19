import QtyBox from './atoms/QtyBox'
import CardPrice from './atoms/CardPrice'
import ProductStamp from './atoms/ProductStamp'
import QtyAddCart from './atoms/QtyAddCart'
import Image from 'next/image'
import DetailsProduct from './atoms/DetailsProduct'

function ProductCard({}) {
  return (
    <>
      <div className="ProductCard">
        <div className="generalInfoProduct">
          <div className="imgContainer">
            <Image
              src={'https://losangeles.comes.cl/wp-content/uploads/2019/07/MAji2DLC.jpg'}
              width={90}
              height={100}
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
              <CardPrice />
              <QtyAddCart value={0} fontSize={'12px'} />
            </div>
          </div>
        </div>
        <div className="containerDetailsProduct" id="productDetails">
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
        }
        .generalInfoProduct {
          display: flex;
          flex-direction: row;
          justify-content: space-evenly;
        }
        .ProductCardInfo {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          margin-left: 3%;
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
          width: 90%;
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
