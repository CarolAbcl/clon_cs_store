const Button = ({ value, color = '#8AC541', width, height, fontSize, ...rest }) => {
  return (
    <>
      <button {...rest}>
        {value}
      </button>
      <style jsx>{`
        button {
          background-color: transparent;
          border: 1px solid  ${color};
          border-radius: 4px;
          color: ${color};
          font-size: ${fontSize || '14px'};
          padding: 0.5rem 1rem;
          width: ${width || 'auto'};
          height: ${height || 'auto'};
        }

        button:hover {
          background-color: ${color};
          border: 1px solid  ${color};
          color: #FFF;
          cursor: pointer;
          transition: all 0.2s;
        }
      `}</style>
    </>
  )
}

export default Button
