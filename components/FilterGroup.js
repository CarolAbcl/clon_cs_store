function FilterGroup({ title, children }) {
  // Recibe el título y los componentes hijos
  return (
    <>
      <div className="filter-group">
        <h4>{title}</h4>
        <div className="filters">{children}</div>
      </div>
      <style jsx>{`
        .filter-group{
          width: 100%;
          padding: 0 .5rem;
        }
        .filters {
          padding-left: .5rem;
        }
      `}</style>
    </>
  )
}

export default FilterGroup
