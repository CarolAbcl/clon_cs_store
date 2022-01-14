function RoundButtons(props) {
  const { backgroundColor, text, size, disabled } = props;
  // RoundButtons recibe:
  // backgroundColor: color de fondo ; text: texto dentro del botón ; size: tamaño del botòn ; disabled : si el botòn se encuentra deshabilitado
  return (
    <>
      <button className={disabled && 'disabled'} > {text} </button> 
      {/* En caso de que el componente esté outline esto se transfiere a la clase del botón */}

      <style jsx>{`
            button{
                width: ${size};
                height: ${size};
                border-radius: 50%;
                background-color: ${backgroundColor};
                color: var(--light);
                border: none;
                font-weight: 800;
                cursor: pointer;
            }
            .disabled{
                background-color: var(--gray);
            }
            button:hover {
            transition: all 0.2s;
            opacity: .9;
            cursor: pointer
            }
        `}
      </style>
    </>
  )
}

export default RoundButtons
