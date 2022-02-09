import { Icon } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'

function Alert() {
  const [state, setstate] = useState({ message: '', type: null, product: {}, show: 'hide' })
  const { message, type, product } = useSelector((state) => state.alert)

  useEffect(() => {
    //type es added o remove para no ejecutar en el estado inicial
    if (type) {
      setstate({ message: message, type: type, product: product, show: 'show' })
      const time = setTimeout(() => {
        setstate({ message: message, type: type, product: product, show: 'hide' })
      }, 2000)
      const time2 = setTimeout(() => {
        setstate({ message: '', type: null, product: {}, show: 'hide' })
      }, 3000)
      return () => {
        clearTimeout(time)
        clearTimeout(time2)
      }
    }
  }, [type, product])

  return (
    <>
      <div className={`alert ${state.type} ${state.show}`}>
        <Icon>{state.type === 'added' ? 'done' : 'priority_high'}</Icon>
        <p className="message">{state.message}</p>
      </div>

      <style jsx>{`
        .alert {
          opacity: 0;
          color: var(--light);
          background-color: var(--gray);
          padding: 1rem 2rem;
          position: fixed;
          top: -5rem;
          left: 50%;
          right: 50%;
          width: max-content;
          z-index: -1;
          border-radius: 2rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transform: translateX(-50%);
          transition: all 0.2s ease-in-out;
        }

        .show {
          opacity: 1;
          top: 2rem;
          z-index: 30;
        }

        .added {
          background-color: var(--primary);
        }
        .removed {
          background-color: var(--secondary);
        }

        .message {
          margin: 0;
        }
      `}</style>
    </>
  )
}

export default Alert
