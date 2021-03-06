import Head from 'next/head'
import SearchBar from '../components/atoms/SearchBar'
import CardsGroup from '../components/CardsGroup'
import ProductCard from '../components/ProductCard'
import Filter from '../components/Filter'
import FilterGroup from '../components/FilterGroup'
import Check from '../components/atoms/Check'
import { useSelector } from 'react-redux'
import { setfilter, removefilter } from '../store/actions/filtersAction'
import { useDispatch } from 'react-redux'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useEffect, useState } from 'react'
import { getProducts } from './api/product/products'
import { getCategories } from './api/category/categories'
import Loader from '../components/Loader'

export const getServerSideProps = async () => {
  const skip = 0
  const take = 12
  const { products, productCount } = await getProducts(take, skip)
  const { categories } = await getCategories()
  return { props: { products, productCount, categories } }
}

function Catalogo({ products, productCount, categories, setReturnCatalogue, returnCatalogue }) {
  const dispatch = useDispatch()
  const activeFilters = useSelector((state) => state.filters)
  // variable que captura si existen productos ya cargados, si no existen devuelve products=12 productos
  const productsLoad = returnCatalogue.loadedProducts === null ? products : returnCatalogue.loadedProducts
  // Productos buscados
  const [productsFetch, setProductsFetch] = useState(productsLoad)

  // Determina si quedan o no mas productos
  const [hasMore, setHasMore] = useState(false)

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
  const handleFilter = (checked, filterName) =>
    checked ? dispatch(setfilter(filterName)) : dispatch(removefilter(filterName))

  // Carga mas productos
  const getMoreProducts = async () => {
    const response = await fetch(`/api/product/products?skip=${productsFetch.length}&take=12`)
    const { data } = await response.json()

    setProductsFetch((productsFetch) => [...productsFetch, ...data])
  }

  useEffect(() => {
    // productoCount = cantidad de productos en bd
    // productsFetch.length = cantidad de productos en el primer render
    setHasMore(productCount > productsFetch.length ? true : false)
  }, [productsFetch, productCount])
  // Estado que guarda la posicion del scroll
  const [positionScroll, setPositionScroll] = useState(0)
  //useEffect que captura la posicion del scroll
  useEffect(() => {
    const scrollCapture = () => {
      const { scrollY } = window
      setPositionScroll(scrollY)
    }
    window.addEventListener('scroll', scrollCapture)
    return () => window.removeEventListener('scroll', scrollCapture)
  }, [])
  //useEffect que posiciona en el producto si est?? guardada una posicion anterior
  useEffect(() => {
    const prevScrollPosition = returnCatalogue.positionScroll
    prevScrollPosition !== 0 ? window.scrollTo(0, prevScrollPosition) : window.scrollTo(0, 0)
  }, [returnCatalogue.positionScroll])

  return (
    <div>
      <Head>
        <title>Cat??logo ComeS </title>
        <meta
          name="description"
          content="Encuentra proveedores para tu tienda de alimentos f??cilmente y respaldados por ComeS, la plataforma de alimentaci??n sustentable de Chile."
        />
        <meta name="keywords" content="alimentos saludables, nuevos alimentos, sustentable" />
      </Head>
      <main>
        <div className="container">
          <Filter className="hidden">
            <FilterGroup title="Categorias">
              {categories.map((category) => (
                <Check
                  key={category.ID_category}
                  text={category.category}
                  onChange={({ target: { checked } }) => handleFilter(checked, category.category)}
                  checked={activeFilters.some((e) => e === category.category)}
                />
              ))}
            </FilterGroup>
          </Filter>
          <div className="catalogo-container">
            <div className="header-catalogo">
              <h2 className="primary">CAT??LOGO</h2>
              <Filter className="hidden" isMobile>
                <FilterGroup title="Categorias">
                  {categories.map((category) => (
                    <Check
                      key={category.ID_category}
                      text={category.category}
                      onChange={({ target: { checked } }) => handleFilter(checked, category.category)}
                      checked={activeFilters.some((e) => e === category.category)}
                    />
                  ))}
                </FilterGroup>
              </Filter>
              <SearchBar className="hidden" />
            </div>
            <hr />
            <p align={'center'}>Bienvenid@, Cada Productor establece un pedido m??nimo de compra. Puedes completar tu pedido con distintos productos del mismo productor</p>
            <InfiniteScroll
              dataLength={productsFetch.length}
              next={getMoreProducts}
              hasMore={hasMore}
              loader={<Loader />}
              scrollThreshold={1}>
              <CardsGroup>
                {productsFetch.map((product) => (
                  <ProductCard
                    key={product.ID_product}
                    product={product}
                    setReturnCatalogue={setReturnCatalogue}
                    loadedProducts={productsFetch}
                    positionScroll={positionScroll}
                    inCart={false}
                  />
                ))}
              </CardsGroup>
            </InfiniteScroll>
          </div>
        </div>
      </main>
      <style jsx>
        {`
          .container {
            padding: 1.5rem;
            display: flex;
            gap: 4rem;
          }
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

            .catalogo-container {
              margin-bottom: 13rem;
            }
          }
        `}
      </style>
    </div>
  )
}
export default Catalogo
