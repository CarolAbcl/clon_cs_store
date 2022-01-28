import { useStateValue } from '../StateProvider'
import { RoundButton } from './atoms/buttons'
import { actionTypes } from '../reducer'

function QtyAddCart({ product }) {
  // QtyAddBasket recibe:
  // product = data del producto seleccionado
  const [{ cart }, dispatch] = useStateValue()
  // Si el producto existe en el carrito obtenemos la cantidad, si no devuelve 0
  const exist = cart.find((item) => item.ID_product === product.ID_product)
  const productQty = !exist ? 0 : exist.qty

  // Funcion para agregar producto al carrito
  const addItem = (product) => {
    dispatch({
      type: actionTypes.ADD_TO_CART,
      product,
    })
  }
  // Funcion para modificar la cantidad del carrito a través del imput
  const addItemInput = (product, e) => {
    dispatch({
      type: actionTypes.ADD_TO_CART_INPUT,
      product,
      e,
    })
  }
  //Funcion para eliminar productos del carrito
  const removeItem = (product) => {
    dispatch({
      type: actionTypes.REMOVE_ITEM,
      product,
    })
  }
  return (
    <>
      <div>
        <RoundButton
          text={'-'}
          backgroundColor={'var(--secondary)'}
          disabled
          onClick={() => removeItem(product)}
          productQty={productQty}
        />
        <input
          type="tel"
          id="quantity"
          value={productQty}
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
