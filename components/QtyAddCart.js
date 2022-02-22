import { RoundButton } from './atoms/buttons'
import { addItem, addItemInput, removeItem } from '../store/actions/cartAction'
import { executeAlert } from '../store/actions/alertsAction'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { addProducer } from '../store/actions/producerAction'

function QtyAddCart({ product, inCart }) {
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  // Estado que guarda la cantidad por producto
  const [qtyProduct, setQtyProduct] = useState(0)
  //variable que busca si en el carrito está el producto
  const exist = cart.find((item) => item.ID_product === product.ID_product)
  // si el producto no existe en el carrito entonces será 0 y si existe devuelve la cantidad
  const productQty = !exist ? 0 : exist.qty
  const addToCart = (product, inCart) => {
    dispatch(addItem(product, inCart))
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
    dispatch(addProducer({ cart }))
  }, [cart, dispatch, exist, product, productQty])

  return (
    <>
      <div className="containerQtyAddCart">
        <div>
          <RoundButton
            text={'-'}
            backgroundColor={'var(--secondary)'}
            onClick={() => removeToCart(product)}
            productQty={qtyProduct}
          />
          <input
            type="number"
            id="quantity"
            value={Number.isNaN(productQty) ? 0 : qtyProduct}
            onChange={(e) => dispatch(addItemInput(product, e.target.value, inCart))}></input>
          <RoundButton text={'+'} backgroundColor={'var(--secondary)'} onClick={() => addToCart(product, inCart)} />
        </div>
        {inCart ? (
          Number.isNaN(productQty) || productQty === null ? (
            <p className="pAddQty">Debe ingresar la cantidad</p>
          ) : (
            ''
          )
        ) : (
          ''
        )}
      </div>
      <style jsx>
        {`
          input {
            text-decoration: none;
            border: none;
            text-align: center;
            outline: none;
            width: 4ex;
            -moz-appearance: textfield;
            background-color: var(--ligth);
            ${inCart
              ? Number.isNaN(productQty) || productQty === null
                ? 'border: 0.15rem solid red; margin: 0 0.2rem; border-radius:0.3rem;'
                : ''
              : ''}
          }
          /* Chrome, Safari, Edge, Opera */
          input::-webkit-outer-spin-button,
          input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
          div {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            margin: 1% 0%;
          }
          .containerQtyAddCart {
            display: flex;
            flex-direction: column;
          }
          .pAddQty {
            top: -2.7rem;
            left: 4rem;
            font-size: 0.825rem;
            width: 11rem;
            color: red;
            text-align: center;
            position: absolute;
            border: 0.1rem solid red;
            border-radius: 2rem;
            background-color: white;
            padding: 0.25rem 0.1rem;
            box-shadow: 3px 2px 12px -5px rgba(0, 0, 0, 1);
          }
          @media (min-width: 480px) {
            input {
              width: 2rem;
            }
            .containerQtyAddCart {
              position: relative;
            }
            .pAddQty {
              top: -2.9rem;
              left: -1.675rem;
            }
          }
        `}
      </style>
    </>
  )
}

export default QtyAddCart
