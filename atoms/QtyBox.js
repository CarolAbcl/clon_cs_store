import Image from 'next/image'
import Icon from '@material-ui/core/Icon'

function QtyBox({ width, qtyBox = 6 }) {
  // QtyBox recibe:
  // width: el ancho del contenedor del formato caja
  return (
    <>
      <div>
        <Image src={'https://imgur.com/TduL90a.png'} width={50} height={50} alt="Caja"></Image>
        <Icon style={{ fontSize: 1 + 'em' }}>close</Icon>
        <span>{qtyBox}</span>
      </div>

      <style jsx>
        {`
          div {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            padding: 0.5rem;
            width: ${width}%;
          }
          span {
            font-size: 0.8rem;
          }
        `}
      </style>
    </>
  )
}

export default QtyBox
