import { useSelector } from 'react-redux'
import CancelcartModal from './CancelCartModal'

function Modal() {
  const { modal } = useSelector((state) => state)

  return (
    <>
      <div className={`modal ${modal.open && 'is-open'}`}>
        <div className="modal-container">{modal.modalType === 'CancelcartModal' && <CancelcartModal />}</div>
      </div>

      <style jsx>{`
        .modal {
          position: fixed;
          z-index: 999;
          top: 0;
          left: 0;
          width: 100%;
          min-height: 100vh;
          background-color: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(5px);
          display: none;
          justify-content: center;
          text-align: center;
        }
        .modal.is-open {
          display: flex;
        }
        .modal-container {
          position: relative;
          border-radius: 15px;
          display: flex;
          align-items: center;
        }
      `}</style>
    </>
  )
}

export default Modal
