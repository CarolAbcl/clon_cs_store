function DetailsProduct({ text, price, value, width, align }) {
  return (
    <>
      <div>
        <p> {text} </p>
        <h4>
          {price && '$' + price} {value}
        </h4>
      </div>

      <style jsx>{`
        div {
          width: ${width}%;
          display: flex;
          flex-direction: column;
          align-items: ${align};
          padding: 0rem 1rem;
          text-align: ${align === 'flex-end' && 'right'};
        }
        p {
          font-family: Aller;
          font-size: 12px;
          margin: 0;
        }
        h4 {
          font-family: Isidora;
          font-size: 18px;
          color: var(--secondary);
          font-weight: 500;
        }
      `}</style>
    </>
  )
}

export default DetailsProduct
