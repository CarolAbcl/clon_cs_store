import Icon from '@material-ui/core/Icon'

function CardPrice({ ProductPrice = '3.450' }) {
  // CardPrice recibe:
  // width: el ancho del contenedor del precio
  return (
    <>
      <div>
        <p> ${ProductPrice} </p>
        <button type="button">
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
            width: 5%;
            color: var(--gray);
          }
        `}
      </style>
    </>
  )
}

export default CardPrice
