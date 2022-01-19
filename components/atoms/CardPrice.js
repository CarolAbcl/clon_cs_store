import Icon from '@material-ui/core/Icon'

function CardPrice({ ProductPrice = '3.450' }) {
  // CardPrice recibe:
  // ProductPrice que será el precio del producto

  // Función que muestra y esconde la información mas detallada del producto
  const ProductDetails = () => {
    const btnProductDetails = document.getElementById('productDetails')
    if (btnProductDetails.style.display === 'flex') {
      btnProductDetails.style.display = 'none'
    } else {
      btnProductDetails.style.display = 'flex'
    }
  }

  return (
    <>
      <div>
        <p className="fontPrice"> ${ProductPrice} </p>
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
            justify-content: center;
            width: auto;
            align-items: center
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
