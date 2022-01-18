import RoundButtons from './atoms/RoundButton'

function QtyAddCart({ fontSize, value }) {
  // QtyAddBasket recibe:
  // fontSize: tamaño fuente ; value: cantidad;
  return (
    <>
      <div>
        <RoundButtons text={'-'} backgroundColor={'var(--secondary)'} size={'1.5rem'} id="reduce" disabled />
        <input type="tel" id="quantity" defaultValue={value}></input>
        <RoundButtons text={'+'} backgroundColor={'var(--secondary)'} size={'1.5rem'} id="increase" />
      </div>
      <style jsx>
        {`
          input {
            text-decoration: none;
            border: none;
            text-align: center;
            outline: none;
            width: 1.5rem;
            font-size: ${fontSize};
          }
          div {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
          }
        `}
      </style>
    </>
  )
}

export default QtyAddCart
