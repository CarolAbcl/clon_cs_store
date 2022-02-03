import Image from 'next/image'
import Link from 'next/link'
import QtyBox from '../../components/atoms/QtyBox'
import QtyAddProduct from '../../components/QtyAddCart'
import Badge from '../../components/atoms/Badge'
import { ButtonSecondary } from '../../components/atoms/buttons'
import Icon from '@material-ui/core/Icon'

export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.API_URL}/api/product/products`) // desde la api toma los productos
  const { data } = await res.json()
  const paths = data.map((product) => {
    return {
      params: { slug: product.slug },
    }
  })
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  const productFetch = await fetch(`${process.env.API_URL}/api/product/products`) // desde la api toma los productos
  const products = await productFetch.json()
  const slug = context.params.slug
  const [{ID_product}] = products.data.filter((product) => product.slug == slug) // toma el producto que haga match con el slug y saca el ID
  const res = await fetch(`${process.env.API_URL}/api/product/${ID_product}`)
  const { data } = await res.json()

  return {
    props: { product: data['product'] ?? null },
  }
}

function ProductInfo({ product }) {
  // formato en cantidades y precios
  const PriceProduct = '$' + new Intl.NumberFormat('de-DE').format(product.wholesale_unit_price)
  const saleFormat = product.sale_format
  const suggestedSalePrice = '$' + new Intl.NumberFormat('de-DE').format(product.suggested_sale_price)
  const price_package = '$' + new Intl.NumberFormat('de-DE').format(product.price_package)

  return (
    <>
      <div className="container">
        <div className="product-summary">
          <div className="img">
            <Image
              src={`${process.env.NEXT_PUBLIC_IMAGES_PATH}/${product.image[0] ? product.image[0].file_image : 'imagen_no_disponible.jpg'}`}
              alt=""
              layout="fill"
              objectFit="cover"
              objectPosition={'center'}
              className="bradius-1"
            />
          </div>
          <div className="short-info">
            <div>
              <h1>{product.name}</h1>
              <div>
                <Link href="#">
                  <a className="links">{product.producer.brand_name}</a>
                </Link>
              </div>
            </div>
            <hr />
            <div className="element-block">
              <div className="price-element">
                <p>Precio unidad al por mayor</p>
                <p className="secondary impact">{PriceProduct}</p>
              </div>
              <div className="price-element right">
                <p>
                  Precio por caja <br className="mobile" />
                  <span className="desktop">iva incluido</span>
                  <span className="small mobile">iva incluido</span>
                </p>
                <p className="secondary impact">{price_package}</p>
              </div>
            </div>
            <div className="element-block">
              <div className="price-element">
                <p>Precio sugerido de venta</p>
                <p className="secondary low-impact">{suggestedSalePrice} </p>
              </div>
            </div>
            <div className="element-block">
              <div>
                <p>
                  Duración: <span className="primary"> {product.duration} meses</span>
                </p>
              </div>
              <div className="right row">
                <p>Formato:</p>
                <QtyBox product={{ sale_format: saleFormat }} padding="0"></QtyBox>
              </div>
            </div>
            <div className="element-block">
              <p>
                Tiempo estimado de entrega: <span className="primary"> {product.delivery_time} días</span>
              </p>
            </div>
            <hr />
            <div className="element-block hidden">
              <p className="add-cart mobile">Agregar al carrito:</p>
              <QtyAddProduct
                product={{}}
                addItem={() => console.log('hola') /* Provisorio hasta decidir el manejo de estados */}
                removeItem={() => console.log('eliminado') /* Provisorio hasta decidir el manejo de estados */}
                cartItems={[]}
              />
              <ButtonSecondary value="Agregar al carro" fontSize="1rem" className="desktop" />
              <Icon className="desktop gray">share</Icon>
            </div>
            <hr className="desktop hidden" />
            <div className="element-block hidden">
              <div className="categories">
                <p>Categorías: </p>
                <Badge value="Limonada" />
                <Badge value="Bebestibles" />
                <Badge value="Condimentos" />
                <Badge value="Café" />
                <Badge value="Té" />
              </div>
            </div>
          </div>
        </div>
        <div className="product-description">
          <details open>
            <summary>
              <h2>Descripción</h2>
            </summary>
            <div className="details-content">
              <p>{product.description}</p>
            </div>
          </details>
          <details>
            <summary>
              <h2>Usos y Beneficios</h2>
            </summary> {/* ocultar cuando no haya información */}
            <div className="details-content">
              <p>{product.benefit}</p>
            </div>
          </details>
          <details>
            <summary>
              <h2>Modo de conservación</h2>
            </summary>
            <div className="details-content">
              <p>{product.conservation}</p>
            </div>
          </details>
        </div>
        <div className="categories mobile hidden">
          <p>Categorías: </p>
          <Badge value="Limonada" />
          <Badge value="Bebestibles" />
          <Badge value="Condimentos" />
          <Badge value="Café" />
          <Badge value="Té" />
        </div>
      </div>
      <style jsx>
        {`
          .container {
            width: 90%;
            margin: 1.5rem auto;
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            padding-bottom: 4rem;
          }

          .product-summary {
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }

          .short-info {
            display: inherit;
            flex-direction: column;
            gap: 1rem;
          }

          .img {
            position: relative;
            aspect-ratio: 1/1;
          }

          .element-block {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1.5rem;
          }
          .element-block div {
            flex: 2;
          }

          .element-block p {
            margin: 0;
          }

          .price-element {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            align-self: flex-start;
          }

          .secondary {
            color: var(--secondary);
          }

          .impact {
            font-size: 1.5rem;
          }

          .low-impact {
            font-size: 1.375rem;
          }

          h1 {
            margin: 0;
            margin-bottom: 0.5rem;
          }

          .right {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            flex: 1;
            text-align: right;
          }

          .row {
            flex-direction: row;
          }

          .right.row {
            align-items: center;
            justify-content: flex-end;
            gap: 0.5rem;
          }

          .small {
            font-size: 0.875rem;
          }

          summary h2 {
            display: inline-block;
          }
          summary::marker {
            content: '';
          }
          summary::after {
            content: ' ▶';
            display: inline-block;
            margin-left: 0.5rem;
            transition: all 0.2s;
            transform-origin: center;
            position: absolute;
            top: 25%;
            right: 1rem;
            color: var(--gray);
          }

          summary {
            background-color: #eee;
            padding: 0.5rem;
            position: relative;
          }

          summary:hover {
            background-color: #e5e5e5;
          }

          details {
            border: 1px solid var(--light-gray);
          }

          details:first-child {
            border-radius: 0.5rem 0.5rem 0rem 0rem;
          }

          details:last-child {
            border-radius: 0 0 0.5rem 0.5rem;
          }

          details:only-of-type {
            border-radius: 0.5rem;
          }

          .details-content {
            padding: 0.5rem;
          }

          details[open] summary::after {
            transform: rotate(90deg);
          }

          hr {
            width: 100%;
            margin: 0;
            border: none;
            border-bottom: 1px solid var(--light-gray);
          }

          .add-cart {
            font-size: 1.25rem;
          }

          .categories {
            display: none;
            flex-wrap: wrap;
            gap: 0.75rem;
            justify-content: flex-start;
            align-items: center;
          }

          .mobile {
            display: flex;
          }

          .desktop {
            display: none;
          }

          .categories p {
            margin: 0;
          }

          @media (min-width: 600px) {
            .container {
              width: 70%;
              padding-bottom: 4rem;
            }

            .product-summary {
              flex-direction: row;
              gap: 2rem;
            }

            .img {
              flex: 2;
              height: inherit;
              aspect-ratio: auto;
            }

            .short-info {
              flex: 3;
            }

            .categories {
              display: flex;
            }

            .categories p {
              font-size: 1.25rem;
              width: 100%;
            }

            .mobile {
              display: none;
            }
            .desktop {
              display: flex;
            }
            span.desktop {
              display: inline;
            }
          }
        `}
      </style>
    </>
  )
}

export default ProductInfo
