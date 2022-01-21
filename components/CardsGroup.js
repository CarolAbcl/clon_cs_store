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
        }
      `}</style>
    </>
  )
}

export default CardsGroup
