export const ButtonSecondary = ({ value, backgroundColor = '#7B61FF', color = '#FBFBFB', fontSize = '12px', ...rest }) => {
  // ButtonSecondary recibe:
  // value: texto a mostrar
  // backgroundColor: color del fondo
  // color: color fuente
  // fontSize: tamanio letra
  // ..rest: cualquier otra propiedad (Ej. onClick del <button></button> )

  return (
    <>
      <button {...rest}>{value}</button>
      <style jsx>{`
        button {
          background-color: ${backgroundColor};
          color: ${color};
          font-size: ${fontSize};
          border: none;
          padding: 10px 50px
        }

        button:hover {
          transition: all 0.2s;
          opacity: .9;
          cursor: pointer
        }
    `}</style>
    </>
  )
}
