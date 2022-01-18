import RoundButtons from './RoundButton'

function QtyAddCart({ fontSize, value }) {
  // QtyAddBasket recibe:
  // fontSize: tamaño fuente ; value: cantidad;
  return (
    <>
      <RoundButtons text={'-'} backgroundColor={'var(--secondary)'} size={'30px'} id="reduce" disabled />
      <input type="tel" id="quantity" defaultValue={value}></input>
      <RoundButtons text={'+'} backgroundColor={'var(--secondary)'} size={'30px'} id="increase" />

      <style jsx>
        {`
          input {
            text-decoration: none;
            border: none;
            text-align: center;
            outline: none;
            width: 10%;
            font-size: ${fontSize};
          }
        `}
      </style>
    </>
  )
}

export default QtyAddCart
