function Filter({ children }) {
  return (
    <>
      <div>
        <h3>Filtros</h3>
        {children}
      </div>
      <style jsx>{`
        div {
          width: 100%;
        }
        h3{
          color: var(--dark-green);
        }
      `}</style>
    </>
  )
}

export default Filter
