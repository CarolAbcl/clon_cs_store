import QtyBox from '../atoms/QtyBox'
import CardPrice from '../atoms/CardPrice'
import ProductStamp from '../atoms/ProductStamp'
import QtyAddCart from './QtyAddCart'
import Image from 'next/image'

function ProductCard({}) {
  return (
    <>
      <div className="ProductCard">
        <div className="generalInfoProduct">
          <Image src={'https://imgur.com/TduL90a.png'} width={35} height={35} alt=""></Image>
          <div className="ProductCardInfo">
            <h2>Nombre del producto</h2>
            <a href="#">Nombre del productor</a>
            <div>
              <ProductStamp width="15" />
              <QtyBox />
            </div>
            <div>
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
          background-color: var(--light);
          box-shadow: 5px 3px 16px -6px rgba(0, 0, 0, 0.15);
          border-radius: 8px;
          width: 25%;
          justify-content: center;
          align-items: stretch;
        }
        .generalInfoProduct {
          display: flex;
          flex-direction: row;
        }
        .ProductCardInfo {
          display: flex;
          flex-direction: column;
        }
        div {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
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
      `}</style>
    </>
  )
}

export default ProductCard
