import { useState } from 'react'
import Icon from '@material-ui/core/Icon'
import { Button } from './atoms/buttons'

function Filter({ children }) {
  const [show, setshow] = useState(false)
  // Para mostrar y ocultar en versión mobile
  return (
    <>
      <div className="filters-container">
        <h3>Filtros</h3>
        <div className="filter-button" onClick={() => setshow(true)}>
          <Icon>filter_alt</Icon>
          <span>Filtros</span>
        </div>
        <div
          className={`background ${show ? 'show' : ''}`}
          onClick={() => {
            setshow(false)
          }}></div>
        <div className={`filters ${show ? 'show' : ''}`}>
          {children}
          <div className="action-buttons">
            <Button value="Aplicar" width="100%" onClick={() => setshow(false)}></Button>
            <Button value="Limpiar" width="100%" color="var(--secondary)" onClick={() => setshow(false)}></Button>
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
          width: 100%;
        }
        h3 {
          color: var(--dark-green);
        }
        .filters {
          display: flex;
          gap: 1.5rem;
          flex-direction: column;
        }
        .filter-button {
          display: none;
        }
        .background {
          display: none;
        }
        @media (max-width: 800px) {
          h3 {
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
