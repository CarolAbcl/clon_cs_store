function CardsGroup({ children }) {
  // recibe los componentes hijos ProductCard
  return (
    <>
      <div>{children}</div>
      <style jsx>{`
        div {
          display: flex;
          flex-wrap: wrap;
        }
      `}</style>
    </>
  )
}

export default CardsGroup
