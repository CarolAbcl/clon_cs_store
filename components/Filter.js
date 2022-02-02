import { useState } from 'react'
import Icon from '@material-ui/core/Icon'
import { Button } from './atoms/buttons'
import { resetfilters } from '../store/actions/filtersAction'
import { useDispatch } from 'react-redux'


function Filter({ children, isMobile }) {
  const [show, setshow] = useState(false)
  const dispatch = useDispatch()
  // Para mostrar y ocultar en versión mobile
  return (
    <>
      <div className={`filters-container`}>
        <h2 className="primary">FILTROS</h2>
        <div className="filter-button" onClick={() => setshow(true)}>
          <Icon>filter_alt</Icon>
          <span>Filtros</span>
        </div>
        <hr />
        <div
          className={`background ${show ? 'show' : ''} ${isMobile ? 'mobile' : ''}`}
          onClick={() => {
            setshow(false)
          }}></div>
        <div className={`filters ${show ? 'show' : ''} ${isMobile ? 'mobile' : ''}`}>
          {children}
          <div className="action-buttons">
            <Button value="Aplicar" width="100%" onClick={() => setshow(false)}></Button>
            <Button value="Limpiar" width="100%" color="var(--secondary)" onClick={() => dispatch(resetfilters())}></Button>
          </div>
        </div>
      </div>
      <style jsx>{`
        .action-buttons {
          background-color: var(--light);
          display: flex;
          gap: 1rem;
        }
        .filters-container {
          flex: 1;
          ${isMobile ? 'display:none;' : 'position: sticky; top: 125px;'}
          height: fit-content;
        }
        h2 {
          font-weight: normal;
          ${isMobile ? 'display:none;' : 'display: flex; height: 31px; align-items:center;'}
        }
        hr {
          margin-top: 1.5rem;
          margin-bottom: 2rem;
          border: none;
          border-bottom: 1px solid var(--light-gray);
        }
        .filters {
          display: flex;
          gap: 1.5rem;
          flex-direction: column;
        }
        .filter-button {
          ${isMobile
            ? 'display: flex; gap: 0.25rem; align-items: center; padding: 0.5rem; color: var(--gray);'
            : 'display: none;'}
        }

        .filters.mobile {
          display: none;
          max-height: 90vh;
          overflow-y: scroll;
          position: fixed;
          width: 70%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: var(--light);
          padding: 1rem 1.5rem;
          border-radius: 0.5rem;
          z-index: 30;
        }

        .filters.show {
          display: flex;
        }
        .background.mobile {
          display: none;
          position: fixed;
          width: 100%;
          height: 100vh;
          background: #00000077;
          top: 0;
          left: 0;
          z-index: 20;
        }

        .background.show {
          display: block;
        }
        .background {
          display: none;
        }
        @media (max-width: 800px) {
          .filters-container {
            ${isMobile ? 'display: block; flex: 0;' : 'display: none'}
          }
          h2 {
            display: none;
          }

          hr {
            display: none;
          }

          .action-buttons {
            position: sticky;
            bottom: 0;
          }

          .filter-button {
            display: flex;
            gap: 0.25rem;
            align-items: center;
            padding: 0.5rem;
            color: var(--gray);
            cursor: pointer;
          }
          .filters {
            display: none;
          }
          .filters.show {
            display: flex;
            max-height: 90vh;
            overflow-y: scroll;
            position: fixed;
            width: 70%;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: var(--light);
            padding: 1rem 1.5rem;
            border-radius: 0.5rem;
            z-index: 30;
            scrollbar-color: var(--primary) transparent;
            scrollbar-width: thin;
          }

          .filters::-webkit-scrollbar {
            width: 0.4rem;
          }
          .filters::-webkit-scrollbar-track-piece {
            margin: 1rem;
          }
          .filters::-webkit-scrollbar-thumb {
            background-color: var(--primary);
            border-radius: 0.25rem;
          }
          .background.show {
            display: block;
            position: fixed;
            width: 100%;
            height: 100vh;
            background: #00000077;
            top: 0;
            left: 0;
            z-index: 30;
          }
        }
      `}</style>
    </>
  )
}

export default Filter
