import Image from 'next/image'
import Icon from '@material-ui/core/Icon'

function QtyBox({ product, padding = 0.5 }) {
  // QtyBox recibe:
  // qtyBox: la cantidad de productos por caja

  return (
    <>
      <div className="containerQtyBox">
        <span>{product.sale_format}</span>
        <Icon style={{ fontSize: 1 + 'em' }}>close</Icon>
        <div className="img-container">
          <Image
            src={'https://imgur.com/TduL90a.png'}
            width={20}
            height={20}
            layout="responsive"
            alt="Caja"
            sizes="50vw"></Image>
        </div>
      </div>

      <style jsx>
        {`
          .containerQtyBox {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            padding: ${padding}rem;
            justify-content: flex-end;
            gap: 0.25rem;
          }
          .img-container {
            width: 1.25rem;
            height: 1.25rem;
          }
        `}
      </style>
    </>
  )
}

export default QtyBox
