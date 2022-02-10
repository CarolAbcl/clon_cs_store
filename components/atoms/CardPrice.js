import Icon from '@material-ui/core/Icon'
import priceFormat from '../../helpers/priceFormat'

function CardPrice({ show, setShow, product, inCart, sizeFont }) {
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
      <div className="container">
        <p>Precio por caja</p>
        <div className="flex">
          <h4>{priceFormat(product.price_package)} </h4>
          {!inCart && (
            <button
              type="button"
              onClick={() => {
                setShow(!show)
              }}>
              <Icon style={{ fontSize: 1.4 + 'em'}}>info</Icon>
            </button>
          )}
        </div>
      </div>

      <style jsx>
        {`
          .container {
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
            color: var(--purple);
          }

          p {
            margin: 0;
            font-size: ${sizeFont};
          }
          h4 {
            font-size: ${sizeFont};
          }
          @media (min-width: 480px) {
            div {
              padding: 0 0.5rem;
            }
            .container {
              align-items: ${inCart ? 'center' : 'flex-start'};
            }
            p {
              text-align: ${inCart ? 'center' : 'left'};
            }
          }
        `}
      </style>
    </>
  )
}

export default CardPrice
