import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNoteOrder } from '../store/actions/orderNoteAction'
import { Icon } from '@material-ui/core'

function AddNoteOrder() {
  const dispatch = useDispatch()
  const note = useSelector((state) => state.note)

  const [noteOrder, setNoteOrder] = useState(note)

  const [show, setShow] = useState(false)

  useEffect(() => {
    dispatch(addNoteOrder(noteOrder))
  }, [dispatch, noteOrder])

  return (
    <>
      <div>
        <div className="btnsContainer">
          <button className="btnAddNoteOrder" onClick={() => setShow(!show)}>
            {noteOrder === '' ? 'Agregar nota al pedido' : 'Nota del pedido'}
          </button>
          {noteOrder !== '' ? (
            <button className="btnClose" onClick={() => setNoteOrder('')}>
              <Icon>highlight_off</Icon>
            </button>
          ) : (
            <button className="btnExpand" onClick={() => setShow(!show)}>
              {show ? <Icon>expand_more</Icon> : <Icon>chevron_right</Icon>}
            </button>
          )}
        </div>
        {show || noteOrder !== '' ? (
          <>
            <textarea
              className="textAddNoteOrder"
              type="text"
              value={noteOrder}
              placeholder="Ingresa aquí tu nota"
              autoComplete="on"
              onChange={(e) => setNoteOrder(e.target.value)}></textarea>
          </>
        ) : (
          ''
        )}
      </div>
      <style jsx>{`
        div {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          width: 100%;
          margin-bottom: 1rem;
        }
        .btnsContainer {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          margin-bottom: 0.5rem;
        }
        .btnAddNoteOrder {
          border: none;
          background: none;
          color: var(--secondary);
          font-family: Aller;
          font-size: 1rem;
          padding-bottom: 0.25rem;
          margin-bottom: 0.5rem;
          cursor: pointer;
        }
        .btnClose {
          border: none;
          background: none;
          font-weight: 700;
          font-family: Aller;
          font-size: 0.8rem;
          color: var(--secondary);
          cursor: pointer;
        }
        .btnExpand {
          border: none;
          background: none;
          color: var(--secondary);
        }
        .textAddNoteOrder {
          border: none;
          width: 100%;
          height: 4rem;
          background-color: var(--ligth);
          overflow-wrap: break-word;
          hyphens: auto;
          font-family: Aller;
          font-size: 1rem;
          border-radius: 0.5rem;
        }
        textarea:focus,
        textarea:active {
          border: none;
          background-color: white;
          resize: none;
          outline: none;
        }
      `}</style>
    </>
  )
}

export default AddNoteOrder
