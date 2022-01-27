import { useState, useEffect } from 'react'
import { RoundButton } from './atoms/buttons'

function QtyAddCart({ product, addItem, removeItem, cartItems, addItemInput }) {
  // QtyAddBasket recibe:
  // fontSize: tamaño fuente ; counProduct: cantidad;
  const [qtyProduct, setQtyProduct] = useState(0)
  const exist = cartItems.find((item) => item.ID_product === product.ID_product)

  const productQty = !exist ? 0 : exist.qty
  useEffect(() => {
    setQtyProduct(productQty)
  }, [productQty])

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
          value={qtyProduct}
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
