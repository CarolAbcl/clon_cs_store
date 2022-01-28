import Icon from '@material-ui/core/Icon'
import { useStateValue } from '../../../StateProvider'

function CartButton() {
  const [{ cart }] = useStateValue()
  // constante que suma el total de productos seleccionados
  const totalItems = cart.reduce((a, c) => a + c.qty, 0)
  return (
    <>
      <div>
        <a href="#">
          <Icon data-test-id="icon-card" fontSize="medium">
            local_grocery_store
          </Icon>
          <span data-test-id="total-items-card">{totalItems}</span>
        </a>
      </div>
      <style jsx>
        {`
          div {
            position: relative;
            padding: 0.5rem;
            display: inline-block;
          }
          a {
            padding: 0.5rem;
            font-size: 1.2rem;
            border-radius: 50%;
            background-color: var(--secondary);
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--light);
          }
          span {
            font-size: 0.8rem;
            background: var(--primary);
            padding: 0.2rem 0.4rem;
            border-radius: 50%;
            position: absolute;
            top: 0px;
            right: 0px;
            ${totalItems == 0 && 'display: none'};
          }
          @media (min-width: 480px) {
            a {
              font-size: 1.4rem;
              padding: 0.6rem;
            }
            span {
              font-size: 1rem;
              padding: 0.2rem 0.5rem;
            }
          }
        `}
      </style>
    </>
  )
}

export default CartButton
