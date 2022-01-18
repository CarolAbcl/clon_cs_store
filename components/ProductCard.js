import QtyBox from './atoms/QtyBox'
import CardPrice from './atoms/CardPrice'
import ProductStamp from './atoms/ProductStamp'
import QtyAddCart from './atoms/QtyAddCart'
import Image from 'next/image'

function ProductCard({}) {
  return (
    <>
      <div className="ProductCard">
        <div className="generalInfoProduct">
          <div className="imgContainer">
            <Image
              src={'https://losangeles.comes.cl/wp-content/uploads/2019/07/MAji2DLC.jpg'}
              width={40}
              height={40}
              alt=""></Image>
          </div>
          <div className="ProductCardInfo">
            <h2>Nombre del producto</h2>
            <a href="#">Nombre del productor</a>
            <div className="containerStampBox">
              <ProductStamp width="15" />
              <QtyBox />
            </div>
            <div className="containerStampBox">
              <CardPrice />
              <QtyAddCart value={0} fontSize={'12px'} />
            </div>
          </div>
        </div>
        <div>
          <p id="productDetails">Hoooola!!!</p>
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
          width: auto;
          justify-content: center;
          align-items: stretch;
          flex-shrink: 1;
        }
        .generalInfoProduct {
          display: flex;
          flex-direction: row;
        }
        .ProductCardInfo {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        div {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }
        .containerStampBox {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: stretch;
          width: 90%;
        }
        h2 {
          font-family: Isidora;
          font-size: 16px;
        }
        a {
          font-family: Aller;
          color: var(--dark-green);
          text-decoration-line: underline;
          font-size: 12px;
        }
        #productDetails {
          display: none;
        }
        .imgContainer {
          margin: 0px 10px;
          border-radius: 8px;
        }
      `}</style>
    </>
  )
}

export default ProductCard
