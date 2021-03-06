import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useDispatch, useSelector } from 'react-redux'
import Check from '../../components/atoms/Check'
import SearchBar from '../../components/atoms/SearchBar'
import CardsGroup from '../../components/CardsGroup'
import Filter from '../../components/Filter'
import FilterGroup from '../../components/FilterGroup'
import Loader from '../../components/Loader'
import ProductCard from '../../components/ProductCard'
import { removefilter, setfilter } from '../../store/actions/filtersAction'
import { getCategories } from '../api/category/categories'
import getProducer from '../api/producer/producers'
import { getProducerWithProducts } from '../api/producer/products/[id]'

export const getStaticPaths = async () => {
  const { producers } = await getProducer()
  const paths = producers.map((producer) => {
    return {
      params: { slug: producer.slug },
    }
  })
  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps = async ({ params }) => {
  const skip = 0
  const take = 12
  const { slug } = params
  const { producers } = await getProducer()
  const { ID_producer } = producers.filter((producer) => producer.slug === slug)[0]
  const { producer, products, productCount } = await getProducerWithProducts(ID_producer, take, skip)
  const { categories } = await getCategories()
  return {
    props: { producer, products, categories, productCount },
    revalidate: 1,
  }
}

function ProducerInfo({ producer, products, categories, productCount, setReturnCatalogue }) {
  const activeFilters = useSelector((state) => state.filters)
  // variable que captura si existen productos ya cargados, si no existen devuelve products=12 productos
  const dispatch = useDispatch()
  //maneja los filtros
  const handleFilter = (checked, filterName) =>
    checked ? dispatch(setfilter(filterName)) : dispatch(removefilter(filterName))

  const [productsFetch, setProductsFetch] = useState(products)
  // Carga mas productos
  const getMoreProducts = async () => {
    const id = producer.ID_producer
    const skip = productsFetch.length
    const response = await fetch(`/api/producer/products/${id}?skip=${skip}&take=12`)
    const { data } = await response.json()

    setProductsFetch((productsFetch) => [...productsFetch, ...data.products])
  }
  const [hasMore, setHasMore] = useState(false)

  useEffect(() => {
    // productoCount = cantidad de productos en bd
    // productsFetch.length = cantidad de productos en el primer render
    setHasMore(productCount > productsFetch.length ? true : false)
  }, [productCount, productsFetch])

  const router = useRouter()
  return router.isFallback ? (
    <Loader />
  ) : (
    <div>
      <Head>
        <title>Cat??logo {producer.brand_name} </title>
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
              <h2 className="primary">PRODUCTOR </h2>
              <Filter isMobile>
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
            <InfiniteScroll
              dataLength={productsFetch.length}
              next={getMoreProducts}
              hasMore={hasMore}
              loader={<Loader />}
              scrollThreshold={1}>
              <h2 className="tittleProducer">{producer.brand_name} </h2>
              <CardsGroup>
                {productsFetch.map((product) => (
                  <ProductCard
                    setReturnCatalogue={setReturnCatalogue}
                    key={product.ID_product}
                    product={product}
                    loadedProducts={productsFetch}
                    inCart={false}
                    producer={producer}
                    pagProducer
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
          .tittleProducer {
            font-size: 1.825rem;
            text-align: center;
            color: var(--primary);
            margin: 1rem;
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

export default ProducerInfo
