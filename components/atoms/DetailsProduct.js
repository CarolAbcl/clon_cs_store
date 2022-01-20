function DetailsProduct({ text='Hola', PriceProduct, saleFormat, suggestedSalePrice, minPurchase, width, align }) {
  return (
    <>
      <div>
        <h5> {text} </h5>
        <h4>
          {PriceProduct && PriceProduct}
          {saleFormat && saleFormat}
          {suggestedSalePrice && suggestedSalePrice}
          {minPurchase && minPurchase}
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
        h5 {
          margin: 5% 0%;
        }
      `}</style>
    </>
  )
}

export default DetailsProduct
