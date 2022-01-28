import { useState, useEffect } from 'react'
import { useStateValue } from '../StateProvider'
import { RoundButton } from './atoms/buttons'

function QtyAddCart({ product, addItem, removeItem, addItemInput }) {
  // QtyAddBasket recibe:
  // fontSize: tamaño fuente ; counProduct: cantidad;
  const [qtyProduct, setQtyProduct] = useState(3)
  const [{ cart }, dispatch] = useStateValue()

  // const exist = cartItems.find((item) => item.ID_product === product.ID_product)

  // const productQty = !cart.product.qty ? 0 : cart.product.qty
  //  useEffect(() => {
  // setQtyProduct(0)
  //  }, setQtyProduct(!cart.product.qty ? 0 : cart.product.qty) )

  return (
    <>
      <div>
        <RoundButton
          text={'-'}
          backgroundColor={'var(--secondary)'}
          disabled
          onClick={() => removeItem(product)}
          qtyProduct={qtyProduct}
        />
        <input
          type="tel"
          id="quantity"
          //value={qtyProduct}
          onChange={(e) => addItemInput(product, e.target.value)}></input>
        <RoundButton text={'+'} backgroundColor={'var(--secondary)'} onClick={() => addItem(product)} />
      </div>
      <style jsx>
        {`
          input {
            text-decoration: none;
            border: none;
            text-align: center;
            outline: none;
            width: 1.1rem;
          }
          div {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            margin: 1% 0%;
          }
          @media (min-width: 480px) {
            input {
              width: 2rem;
            }
          }
        `}
      </style>
    </>
  )
}

export default QtyAddCart
