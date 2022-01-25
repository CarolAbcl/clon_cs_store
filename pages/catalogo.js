import Head from 'next/head'
import SearchBar from '../components/atoms/SearchBar'
import CardsGroup from '../components/CardsGroup'
import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCard'
import Filter from '../components/Filter'
import FilterGroup from '../components/FilterGroup'
import Check from '../components/atoms/Check'
import { useState } from 'react'

const fetchProducts = async () => {
  const response = await fetch(`${process.env.API_URL}/api/product/products`)
  const { data } = await response.json()
  return { products: data }
}
const fetchCategories = async () => {
  const response = await fetch(`${process.env.API_URL}/api/category/categories`)
  const { data } = await response.json()
  return { categories: data }
}

export const getStaticProps = async () => {
  const { products } = await fetchProducts()
  const { categories } = await fetchCategories()

  return { props: { products, categories } }
}

function Catalogo({ products, categories }) {
  // Estado que va guardando los productos seleccionados
  const [cartItems, setCartItems] = useState([])

  // variable que suma el total de productos seleccionados
  const totalItems = cartItems.reduce((a, c) => a + c.qty, 0)

  // Estado que guarda los filtros seleccionados
  const [filters, setfilters] = useState([])

  // agrega elemento a los filtros
  const addFilter = (filterName) => {
    setfilters([...filters, filterName])
  }
  //remueve un elemento de filtros
  const removeFilter = (filterName) => {
    const newFilters = filters.filter((filter) => filter !== filterName)
    setfilters(newFilters)
  }
  //maneja los filtros
  const handleFilter = ({ checked, text }) => (checked ? addFilter(text) : removeFilter(text))

  // Funcion para agregar producto al carrito
  const addItem = (product) => {
    const exist = cartItems.find((item) => item.ID_product === product.ID_product)
    if (exist) {
      setCartItems(
        cartItems.map((item) => (item.ID_product === product.ID_product ? { ...exist, qty: exist.qty + 1 } : item))
      )
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }])
    }
  }

  // Funcion para modificar la cantidad del carrito a través del imput
  const addItemInput = (product, e) => {
    const exist = cartItems.find((item) => item.ID_product === product.ID_product)

    if (e.length == '') {
      setCartItems(cartItems.map((item) => (item.ID_product === product.ID_product ? { ...exist, qty: 0 } : item)))
    } else if (exist) {
      setCartItems(
        cartItems.map((item) => (item.ID_product === product.ID_product ? { ...exist, qty: parseInt(e) } : item))
      )
    } else {
      setCartItems([...cartItems, { ...product, qty: parseInt(e) }])
    }
  }
  //Funcion para eliminar productos del carrito
  const removeItem = (product) => {
    const exist = cartItems.find((item) => item.ID_product === product.ID_product)
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((item) => item.ID_product !== product.ID_product))
    } else {
      setCartItems(
        cartItems.map((item) => (item.ID_product === product.ID_product ? { ...exist, qty: exist.qty - 1 } : item))
      )
    }
  }
  return (
    <div>
      <Head>
        <meta
          name="description"
          content="Encuentra proveedores para tu tienda de alimentos fácilmente y respaldados por ComeS, la plataforma de alimentación sustentable de Chile."
        />
        <meta name="keywords" content="alimentos saludables, nuevos alimentos, sustentable" />
      </Head>
      <main>
        <Navbar totalItems={totalItems} />
        <div className="container">
          <Filter>
            <FilterGroup title="Categorias">
              {categories.map((category) => (
                <Check key={category.ID_category} text={category.category} addFilter={(e) => handleFilter(e)} />
              ))}
            </FilterGroup>
          </Filter>
          <div className="catalogo-container">
            <div className="header-catalogo">
              <h2 className="primary">CATÁLOGO</h2>
              <Filter isMobile>
                <FilterGroup title="Categorias">
                  {categories.map((category) => (
                    <Check key={category.ID_category} text={category.category} addFilter={(e) => handleFilter(e)} />
                  ))}
                </FilterGroup>
              </Filter>
              <SearchBar />
            </div>
            <hr />
            <CardsGroup>
              {products.map((product) => (
                <ProductCard
                  key={product.ID_product}
                  product={product}
                  addItem={addItem}
                  removeItem={removeItem}
                  cartItems={cartItems}
                  addItemInput={addItemInput}
                />
              ))}
            </CardsGroup>
          </div>
        </div>
      </main>
      <style jsx>
        {`
          .catalogo-container {
            width: 100%;
            flex: 4;
          }
          .header-catalogo {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 0.5rem;
            flex-wrap: wrap;
          }
          .container {
            padding: 1.5rem;
            display: flex;
            gap: 4rem;
          }

          h2.primary {
            font-weight: normal;
          }

          hr {
            margin-top: 1.5rem;
            margin-bottom: 2rem;
            border: none;
            border-bottom: 1px solid var(--light-gray);
          }

          @media (min-width: 800px) {
            .container {
              padding: 2rem 4rem;
            }
          }
        `}
      </style>
    </div>
  )
}

export default Catalogo
