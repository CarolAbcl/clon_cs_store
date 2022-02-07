function CardsGroup({ children, inCart }) {
  // recibe los componentes hijos ProductCard
  return (
    <>
      <div>{children}</div>
      <style jsx>{`
        div {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
          justify-content: center;
          align-items: flex-start;
          padding: 1% 2% 2% 2%;

          ${inCart && 'flex-direction: column; width: 100%;'}
        }
      `}</style>
    </>
  )
}

export default CardsGroup
