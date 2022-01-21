import Icon from '@material-ui/core/Icon'

function CartButton({ qtty = 0 }) {
  return (
    <>
      <div>
        <a href="#">
          <Icon fontSize="inherit">local_grocery_store</Icon>
          <span>{qtty}</span>
        </a>
      </div>
      <style jsx>
        {`
          div {
            position: relative;
            padding: 0.5rem;
            z-index: 1;
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
            ${qtty == 0 && 'display: none'};
          }
        `}
      </style>
    </>
  )
}

export default CartButton
