import SearchBar from '../components/atoms/SearchBar'
import ProductCard from '../components/ProductCard'
import { useSelector } from 'react-redux'
import CardsGroup from '../components/CardsGroup'

function Carrito() {
  const { cart } = useSelector((state) => state.cart)
  const total = '$' + new Intl.NumberFormat('de-DE').format(cart.reduce((a, cur) => a + (cur.price_package * cur.qty), 0))
  return (
    <>
      <div className="container">
        <div className="header">
          <h2 className="primary">CARRITO</h2>
          <SearchBar />
        </div>
        <hr />
        {cart.length !== 0 
        ? (<div className="carrito">
          <CardsGroup>
            {cart.map((product) => (
              <ProductCard key={product.ID_product} product={product} inCart />
            ))}
          </CardsGroup>
          <div>
            <div></div>
            <div>
              <p>Subtotal: <span className='secondary'>{total}</span></p>
            </div>
          </div>
        </div>)
        : (
          <h1>No hay elementos en el carrito</h1>
        )}
      </div>
      <style jsx>
        {`
          .container {
            padding: 1.5rem;
          }
          .header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
            flex-wrap: nowrap;
          }
          h2 {
            font-weight: normal;
          }
          hr {
            margin-top: 1.5rem;
            margin-bottom: 2rem;
            border: none;
            border-bottom: 1px solid var(--light-gray);
          }
        `}
      </style>
    </>
  )
}

export default Carrito
