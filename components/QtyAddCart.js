import { RoundButton } from './atoms/buttons'
import { addItem, addItemInput, removeItem } from '../store/actions/cartAction'
import { useDispatch, useSelector } from 'react-redux'

function QtyAddCart({ product }) {
  const { cart } = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  // Si el producto existe en el carrito obtenemos la cantidad, si no devuelve 0
  const exist = cart.find((item) => item.ID_product === product.ID_product)
  const productQty = !exist ? 0 : exist.qty
  return (
    <>
      <div>
        <RoundButton
          text={'-'}
          backgroundColor={'var(--secondary)'}
          disabled
          onClick={() => dispatch(removeItem(product))}
          productQty={productQty}
        />
        <input
          type="tel"
          id="quantity"
          value={productQty}
          onChange={(e) => dispatch(addItemInput(product, e.target.value))}></input>
        <RoundButton text={'+'} backgroundColor={'var(--secondary)'} onClick={() => dispatch(addItem(product))} />
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
