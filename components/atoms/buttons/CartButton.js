import Icon from '@material-ui/core/Icon'
import Link from 'next/link'

function CartButton({ qtyTotal, ...rest }) {
  return (
    <>
      <div className={rest.className}>
        <Link href="/carrito">
          <a>
            <Icon data-test-id="icon-card" fontSize="medium">
              local_grocery_store
            </Icon>
            <span data-test-id="total-items-card">{qtyTotal}</span>
          </a>
        </Link>
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
            ${qtyTotal == 0 && 'display: none'};
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
