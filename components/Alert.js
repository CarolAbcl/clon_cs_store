import { Icon } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'

function Alert() {
  const [state, setstate] = useState('')
  const { message, type, product } = useSelector((state) => state.alert)

  useEffect(() => {
    if (type)
    setstate('show')
    const time = setTimeout(() => {
      setstate('')
    }, 2000)
    return () => clearTimeout(time)
  }, [type, product])

  return (
    <>
      <div className={`alert ${type} ${state}`}>
        <Icon>{type == 'added' ? 'done' : 'priority_high'}</Icon>
        <p className="message">{message}</p>
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
          top: 1rem;
          z-index: 40;
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
