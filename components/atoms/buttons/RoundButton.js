import { useEffect, useState } from 'react'

function RoundButtons({ backgroundColor, text, onClick, productQty }) {
  // RoundButtons recibe:
  // backgroundColor: color de fondo ; text: texto dentro del botón ; size: tamaño del botòn ; disabled : si el botòn se encuentra deshabilitado
  const [disabled, setDisabled] = useState(false)

  useEffect(() => {
    setDisabled(text === '-' && (productQty === 0 || Number.isNaN(productQty)) ? true : false)
  }, [disabled, productQty, text])

  return (
    <>
      <button disabled={disabled} onClick={onClick}>
        {text}
      </button>

      <style jsx>
        {`
          button {
            width: 1.7rem;
            height: 1.7rem;
            border-radius: 50%;
            background-color: ${backgroundColor};
            color: var(--light);
            border: none;
            font-size: 12px;
            font-weight: 800;
            cursor: pointer;
          }
          button:disabled {
            background-color: var(--gray);
          }
          button:hover {
            transition: all 0.2s;
            opacity: 0.9;
            cursor: pointer;
          }
          @media (min-width: 480px) {
            button {
              width: 2.2rem;
              height: 2.2rem;
              font-size: 16px;
            }
          }
        `}
      </style>
    </>
  )
}

export default RoundButtons
