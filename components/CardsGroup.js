function CardsGroup({ children }) {
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
          padding: 0% 2%;
        }
      `}</style>
    </>
  )
}

export default CardsGroup
