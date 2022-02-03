import { Icon } from '@material-ui/core'
import Image from 'next/image'
import Link from 'next/link'
import CardPrice from './atoms/CardPrice'
import QtyAddCart from './QtyAddCart'
import { useDispatch } from 'react-redux'
import { deleteItemCart } from '../store/actions/cartAction'

function ProductCardDesktop({ product, inCart }) {
  const dispatch = useDispatch()

  const price_package = '$' + new Intl.NumberFormat('de-DE').format(product.price_package)
  const subTotal_price = inCart ? '$' + new Intl.NumberFormat('de-DE').format(product.qty * product.price_package) : 0
  return (
    <>
      <div className="ProductCardDesktop">
        <div className="imgContainer">
          <Link href={`/product/${product.slug}`}>
            <a>
              <Image
                src={`${process.env.NEXT_PUBLIC_IMAGES_PATH}/${
                  product.image[0] ? product.image[0].file_image : 'imagen_no_disponible.jpg'
                }`}
                width={60}
                height={70}
                alt="Imagen producto"></Image>
            </a>
          </Link>
        </div>
        <div className="containerInfoProduct">
          <div className="ProductName">
            <Link href={`/product/${product.slug}`}>
              <a>
                <h2>{product.name}</h2>
              </a>
            </Link>
          </div>
          <div className="QtyAddCart">
            <QtyAddCart product={product} />
          </div>
          <div className="CardPrice">
            <CardPrice PriceProduct={price_package} inCart={inCart} sizeFont={'1rem'} />
          </div>
          <div>
            <p className="subtotal">
              Subtotal <span className="secondary subtotal">{subTotal_price}</span>
            </p>
          </div>
        </div>
        <div className="IconDelete">
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
        </div>
      </div>
      <style jsx>{`
        .ProductCardDesktop {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          background-color: var(--light);
          box-shadow: 3px 2px 12px -5px rgba(0, 0, 0, 0.5);
          border-radius: 8px;
          align-items: center;
          flex-shrink: 1;
          padding: 0.5rem;
          margin: 0.8rem 0;
          min-height: '15rem';
          position: relative;
          justify-content: space-between;
          width: 67%;
        }
        .containerInfoProduct {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          width: 85%;
        }
        .imgContainer {
          width: 8%;
        }
        .IconDelete {
          width: 5%;
        }
        .ProductName {
          width: 18rem;
        }
        .subtotal {
          display: flex;
          flex-direction: column;
          font-weight: bold;
          text-align: center;
          width: 5rem;
        }
        .QtyAddCart {
          width: 7rem;
        }
        .CardPrice {
          width: 9rem;
        }

        h2 {
          font-size: 1rem;
        }
      `}</style>
    </>
  )
}

export default ProductCardDesktop
