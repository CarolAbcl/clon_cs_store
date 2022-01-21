import Image from 'next/image'
import Icon from '@material-ui/core/Icon'

function QtyBox({ product }) {
  // QtyBox recibe:
  // qtyBox: la cantidad de productos por caja

  return (
    <>
      <div className="containerQtyBox">
        <div>
          <Image
            src={'https://imgur.com/TduL90a.png'}
            width={20}
            height={20}
            layout="responsive"
            alt="Caja"
            sizes="50vw"></Image>
        </div>
        <Icon style={{ fontSize: 1 + 'em' }}>close</Icon>
        <span>{product.sale_format}</span>
      </div>

      <style jsx>
        {`
          .containerQtyBox {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            padding: 0.5rem;
            margin: 1%;
            width: 50%;
            justify-content: flex-end;
          }
          div {
            width: 22%;
          }
        `}
      </style>
    </>
  )
}

export default QtyBox
