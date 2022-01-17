import Icon from '@material-ui/core/Icon'

function CardPrice({ width }) {
  // CardPrice recibe:
  // width: el ancho del contenedor del precio
  return (
    <>
      <div width={width}>
        <p>$3.450</p>
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
