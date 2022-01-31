import Icon from '@material-ui/core/Icon'

function SearchBar(props) {
  // SearchBar recibe:
  // size: tamaño del contenedor de la barra buscadora
  return (
    <>
      <div className={props.className}>
        <input type="search" placeholder="" id="search" />
        <button type="button">
          <Icon>search</Icon>
        </button>
      </div>

      <style jsx>
        {`
          div {
            border: 0.4px solid rgba(0, 0, 0, 0.2);
            border-radius: 2px 10px 10px 2px;
            display: flex;
            align-content: center;
            justify-content: space-between;
            width: 100%;
          }
          input {
            border: none;
            flex: 1;
          }
          input:focus {
            outline: 0 none;
          }
          button {
            background: none;
            border: none;
            cursor: pointer;
            flex-shrink: 1;
            color: var(--primary);
          }
          @media (min-width: 480px) {
            div {
              border-radius: 10px 2px 2px 10px;
              flex-flow: row-reverse wrap-reverse;
              justify-content: flex-end;
              width: 75%;
            }
            input {
              flex-shrink: 1;
            }
            button {
              flex-shrink: 1;
            }
          }
        `}
      </style>
    </>
  )
}

export default SearchBar
