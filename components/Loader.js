function Loader() {
  return (
    <>
      <div className="loader">
        cargando
        <div className="circle-container">
          <div className="circle-item"></div>
          <div className="circle-item"></div>
          <div className="circle-item"></div>
        </div>
      </div>
      <style jsx>
        {`
          .loader {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            padding: 1rem;
          }
          .circle-container {
            display: flex;
            gap: 0.175rem;
          }

          .circle-item {
            width: 1rem;
            height: 1rem;
            background-color: var(--secondary);
            border-radius: 2rem;
          }

          .circle-item:nth-child(1) {
            animation: bounce 1s infinite;
          }
          .circle-item:nth-child(2) {
            animation: bounce 1s infinite;
            animation-delay: 0.25s;
          }
          .circle-item:nth-child(3) {
            animation: bounce 1s infinite cubic-bezier(0.28, 0.84, 0.42, 1);
            animation-delay: 0.5s;
          }

          @keyframes bounce {
            0% {
              transform: scale(1, 1) translateY(0);
              opacity: 1;
            }
            10% {
              transform: scale(1.1, 0.9) translateY(0);
            }
            30% {
              transform: scale(0.9, 1.1) translateY(-10px);
            }
            50% {
              transform: scale(1, 1) translateY(0);
              opacity: 0.7;
            }
            57% {
              transform: scale(1, 1) translateY(-2px);
            }
            64% {
              transform: scale(1, 1) translateY(0);
              opacity: 0.8;
            }
            100% {
              transform: scale(1, 1) translateY(0);
              opacity: 1;
            }
          }
        `}
      </style>
    </>
  )
}

export default Loader
