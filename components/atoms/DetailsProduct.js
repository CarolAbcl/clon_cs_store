import priceFormat from '../../helpers/priceFormat'

function DetailsProduct({ text, product, width, align }) {
  return (
    <>
      <div>
        <h5> {text} </h5>
        <h4>
          {text === 'Precio por unidad al por mayor iva incluido' && priceFormat(product.wholesale_unit_price)}
          {text === 'Unidades por caja' && product.sale_format}
          {text === 'Precio sugerido de venta' && priceFormat(product.suggested_sale_price)}
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
