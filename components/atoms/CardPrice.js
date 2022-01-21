import Icon from '@material-ui/core/Icon'

function CardPrice({ show, setShow, PriceProduct }) {
  // CardPrice recibe:
  // ProductPrice que será el precio del producto ; show y SetShow para manejar la visualización de la información del producto

  // function FormatNumber({ number }) {
  //   return (
  //     <span style={{ color: "red" }}>
  //       {new Intl.NumberFormat("ES-MX", {
  //         style: "currency",
  //         currency: "MXN"
  //       }).format(number)}
  //     </span>
  //   );
  // }

  return (
    <>
      <div>
        <h4>{PriceProduct} </h4>
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
          @media (min-width: 480px) {
            div {
              padding: 0 0.5rem;
            }
          }
        `}
      </style>
    </>
  )
}

export default CardPrice
