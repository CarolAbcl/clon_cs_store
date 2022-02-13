import { Icon } from '@material-ui/core'
import { Button } from '../atoms/buttons'
import { useDispatch } from 'react-redux'
import { closeModal } from '../../store/actions/modalAction'
import { clearCart } from '../../store/actions/cartAction'

function CancelcartModal() {
  const dispatch = useDispatch()
  return (
    <>
      <div className="containerModal">
        <Icon style={{ fontSize: 7 + 'em', color: 'var(--secondary)' }}>info</Icon>
        <h1 style={{ fontSize: 1.5 + 'em' }}>
          Estás a punto de eliminar <br /> el carrito
        </h1>
        <h1 style={{ fontSize: 1.5 + 'em' }}>¿Deseas continuar?</h1>
        <div className="containerBtns">
          <Button
            value="Cancelar"
            color="var(--secondary)"
            height="3rem"
            fontSize="1rem"
            onClick={() => dispatch(closeModal())}
          />
          <Button value="Confirmar" color="var(--primary)" fontSize="1rem" onClick={() => dispatch(clearCart())} />
        </div>
      </div>
      <style jsx>{`
        .containerModal {
          background-color: white;
          padding: 2.5rem 1.5rem;
          margin: 1rem;
          width: 100%;
          border-radius: 15px;
        }
        .containerBtns {
          display: flex;
          gap: 2rem;
        }
        @media (min-width: 800px) {
          h1 {
            font-size: 2rem !important;
          }
          .containerBtns {
            gap: 4rem;
          }
          .containerModal {
            padding: 3rem 7rem;
            margin: 4rem;
            width: 100%;
            border-radius: 15px;
          }
        }
      `}</style>
    </>
  )
}

export default CancelcartModal
