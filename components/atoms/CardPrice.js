import Icon from '@material-ui/core/Icon'

function CardPrice({ ProductPrice = '3.450', show, setShow }) {
  // CardPrice recibe:
  // ProductPrice que será el precio del producto ; show y SetShow para manejar la visualización de la información del producto

  return (
    <>
      <div>
        <p className="fontPrice"> ${ProductPrice} </p>
        <button
          type="button"
          onClick={() => {
            setShow(!show)
          }}>
          <Icon style={{ fontSize: 1.2 + 'em' }}>info</Icon>
        </button>
      </div>

      <style jsx>
        {`
          div {
            display: flex;
            flex-direction: row;
            justify-content: center;
            width: auto;
            align-items: center;
          }
          button {
            background: none;
            border: none;
            cursor: pointer;
            color: var(--gray);
          }
        `}
      </style>
    </>
  )
}

export default CardPrice
