function CardsGroup({ children }) {
  // recibe los componentes hijos ProductCard
  return (
    <>
      <div>{children}</div>
      <style jsx>{`
        div {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          padding: 0% 2%;
        }
      `}</style>
    </>
  )
}

export default CardsGroup
