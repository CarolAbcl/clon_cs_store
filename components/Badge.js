export const Badge = ({ value, backgroundColor = '#fbfbfb', color = '#8ac541' }) => {
  return (
    <>
      <span>{value}</span>
      <style jsx>{`
        span {
          background-color: ${backgroundColor};
          padding: 2px 15px;
          color:  ${color};
          border-radius: 50px;
          border: 1px solid ${color}
        }
      `}</style>
    </>
  )
}