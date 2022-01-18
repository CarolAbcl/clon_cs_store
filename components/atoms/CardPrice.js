import Icon from '@material-ui/core/Icon'

function CardPrice({ ProductPrice = '3.450' }) {
  // CardPrice recibe:
  // width: el ancho del contenedor del precio

  const ProductDetails = () => {
    const btnProductDetails = document.getElementById('productDetails')
    if (btnProductDetails.style.display === 'block') {
      btnProductDetails.style.display = 'none'
    } else {
      btnProductDetails.style.display = 'block'
    }
  }

  return (
    <>
      <div>
        <p> ${ProductPrice} </p>
        <input id="activar" name="activar" type="checkbox" />
        <button
          type="button"
          onClick={(e) => {
            ProductDetails()
          }}>
          <Icon style={{ fontSize: 1.2 + 'em' }}>info</Icon>
        </button>
      </div>

      <style jsx>
        {`
          div {
            display: flex;
            flex-direction: row;
            align-items: baseline;
            justify-content: center;
            width: auto;
          }
          p {
            font-size: 12px;
            color: var(--secondary);
            font-weight: 500;
          }
          button {
            background: none;
            border: none;
            cursor: pointer;
            color: var(--gray);
            }
          #activar{
            display: none;
          }
          }
        `}
      </style>
    </>
  )
}

export default CardPrice
