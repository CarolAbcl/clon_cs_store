import Image from 'next/image'
import Icon from '@material-ui/core/Icon'

function QtyBox({ qtyBox = 6 }) {
  // QtyBox recibe:
  // qtyBox: la cantidad de productos por caja

  return (
    <>
      <div>
        <Image src={'https://imgur.com/TduL90a.png'} width={20} height={20} alt="Caja"></Image>
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
            margin: 1%;
            width: auto;
          }
        `}
      </style>
    </>
  )
}

export default QtyBox
