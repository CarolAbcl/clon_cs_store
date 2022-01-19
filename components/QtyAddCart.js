import { RoundButton } from './atoms/buttons'

function QtyAddCart({ fontSize, countProduct, setCountProduct }) {
  // QtyAddBasket recibe:
  // fontSize: tamaño fuente ; counProduct: cantidad;
  return (
    <>
      <div>
        <RoundButton
          text={'-'}
          backgroundColor={'var(--secondary)'}
          size={'1.5rem'}
          disabled
          countProduct={countProduct}
          setCountProduct={setCountProduct}
        />
        <input type="tel" id="quantity" defaultValue={countProduct}></input>
        <RoundButton
          text={'+'}
          backgroundColor={'var(--secondary)'}
          size={'1.5rem'}
          countProduct={countProduct}
          setCountProduct={setCountProduct}
        />
      </div>
      <style jsx>
        {`
          input {
            text-decoration: none;
            border: none;
            text-align: center;
            outline: none;
            width: 1.1rem;
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
