import { RoundButton } from './atoms/buttons'
import { addItem, addItemInput, removeItem } from '../store/actions/cartAction'
import { executeAlert } from '../store/actions/alertsAction'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { addProducer } from '../store/actions/producerAction'

function QtyAddCart({ product }) {
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  // Estado que guarda la cantidad por producto
  const [qtyProduct, setQtyProduct] = useState(0)
  //variable que busca si en el carrito está el producto
  const exist = cart.find((item) => item.ID_product === product.ID_product)
  // si el producto no existe en el carrito entonces será 0 y si existe devuelve la cantidad
  const productQty = !exist ? 0 : exist.qty
  const addToCart = (product) => {
    dispatch(addItem(product))    
    !exist && 
    dispatch(executeAlert({ message: 'Producto añadido al carrito', type: 'added', product: product.ID_product }))
  }
  const removeToCart = (product) => {
    dispatch(removeItem(product))
    exist.qty == 1 &&
      dispatch(
        executeAlert({ message: 'Producto eliminado del carrito', type: 'removed', product: product.ID_product })
      )
  }
  // cada vez que un producto cambie su cantidad, se guardará en el estado
  useEffect(() => {
    setQtyProduct(productQty)
    dispatch(addProducer({product, cart}))
  }, [exist, productQty])

  return (
    <>
      <div>
        <RoundButton
          text={'-'}
          backgroundColor={'var(--secondary)'}
          onClick={() => removeToCart(product)}
          productQty={qtyProduct}
        />
        <input
          type="tel"
          id="quantity"
          value={qtyProduct}
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
