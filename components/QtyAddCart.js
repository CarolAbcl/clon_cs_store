import { RoundButton } from './atoms/buttons'
import { addItem, addItemInput, removeItem } from '../store/actions/cartAction'
import { executeAlert } from '../store/actions/alertsAction'
import { useDispatch, useSelector } from 'react-redux'

function QtyAddCart({ product }) {
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  // Si el producto existe en el carrito obtenemos la cantidad, si no devuelve 0
  const exist = cart.find((item) => item.ID_product === product.ID_product)
  const productQty = !exist ? 0 : exist.qty
  const addToCart = (product) => {
    dispatch(addItem(product))
    !exist &&
      dispatch(executeAlert({ message: 'Producto añadido al carrito', type: 'added', product: product.ID_product }))
  }
  const removeToCart = (product) => {
    dispatch(removeItem(product))
    console.log(exist)
    exist.qty == 1 &&
      dispatch(
        executeAlert({ message: 'Producto eliminado del carrito', type: 'removed', product: product.ID_product })
      )
  }

  return (
    <>
      <div>
        <RoundButton
          text={'-'}
          backgroundColor={'var(--secondary)'}
          disabled
          onClick={() => removeToCart(product)}
          productQty={productQty}
        />
        <input
          type="tel"
          id="quantity"
          value={productQty}
          onChange={(e) => dispatch(addItemInput(product, e.target.value))}></input>
        <RoundButton text={'+'} backgroundColor={'var(--secondary)'} onClick={() => addToCart(product)} />
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
