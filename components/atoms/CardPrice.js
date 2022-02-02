import Icon from '@material-ui/core/Icon'

function CardPrice({ show, setShow, PriceProduct, inCart }) {
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
      <div className='container'>
        {inCart && <p>Precio por caja</p>}
        <div className='flex'>
          <h4>{PriceProduct} </h4>
          {!inCart && <button
            type="button"
            onClick={() => {
              setShow(!show)
            }}>
            <Icon style={{ fontSize: 1.2 + 'em' }}>info</Icon>
          </button>}
        </div>
      </div>

      <style jsx>
        {`

          .container{
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          .flex {
            display: flex;
            flex-direction: row;
            justify-content: ${!inCart ? 'center' : 'flex-start'};
            width: auto;
            align-items: center;
            padding: 0;
          }
          button {
            background: none;
            border: none;
            cursor: pointer;
            color: var(--gray);
          }

          p{
            margin: 0;
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
