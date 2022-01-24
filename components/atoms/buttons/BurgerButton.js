function BurgerButton({ toggleMenu }) {
  return (
    <div className="burger_button">
      <input id="burger_menu" type="checkbox" onChange={(e) => toggleMenu(e)} />
      <label htmlFor="burger_menu">
        <div className="burger_container">
          <div className="burger_line"></div>
        </div>
      </label>
      <style jsx>
        {`
          input[type='checkbox'] {
            display: none;
          }

          .burger_container {
            width: 2.5rem;
            height: 2.5rem;
            position: relative;
            display: flex;
            align-items: center;
          }

          .burger_line {
            width: 2.2rem;
          }

          .burger_line,
          .burger_line::after,
          .burger_line::before {
            height: 6px;
            background-color: var(--primary);
            border-radius: 0.25rem;
            transition: all 0.5s cubic-bezier(0.5, -1, 0.5, 1);
          }

          .burger_line::after,
          .burger_line::before {
            content: '';
            position: absolute;
          }
          .burger_line::after {
            width: 2.5rem;
            transform: translateY(-12px);
          }
          .burger_line::before {
            width: 1.9rem;
            transform: translateY(12px);
          }

          label .burger_container {
            z-index: 30;
          }

          :checked ~ label .burger_line {
            background-color: transparent;
            transform: translateX(-50px);
          }

          :checked ~ label .burger_line::after {
            transform: rotate(45deg) translate(35px, -35px);
          }

          :checked ~ label .burger_line::before {
            transform: rotate(-45deg) translate(35px, 35px);
            width: 2.5rem;
          }

          @media (min-width: 800px){
            .burger_button{
              display: none;
            }
          }
        `}
      </style>
    </div>
  )
}

export default BurgerButton
