import Image from 'next/image'
import Link from 'next/link'
import QtyBox from '../../components/atoms/QtyBox'
import QtyAddProduct from '../../components/QtyAddCart'
import Badge from '../../components/atoms/Badge'
import { ButtonSecondary } from '../../components/atoms/buttons'
import Icon from '@material-ui/core/Icon'

function ProductInfo() {
  return (
    <>
      <div className="container">
        <div className="product-summary">
          <div className="img">
            <Image
              src={`${process.env.NEXT_PUBLIC_IMAGES_PATH}/MKVioleta.jpg`}
              alt=""
              layout="fill"
              objectFit="cover"
              objectPosition={'center'}
              className="bradius-1"
            />
          </div>
          <div className="short-info">
            <div>
              <h1>
                Titulo del producto más largo que de costumbre para probar un caso extremadamente extremo de 300gr o
                300cc
              </h1>
              <div>
                <Link href="#">
                  <a className="links">Granja las Lagunas</a>
                </Link>
              </div>
            </div>
            <hr />
            <div className="element-block">
              <div className='price-element'>
                <p>Precio unidad al por mayor</p>
                <p className="secondary impact">$3.450</p>
              </div>
              <div className="price-element right">
                <p>
                  Compra mínima <br className='mobile'/>
                  <span className="desktop">iva incluido</span>
                  <span className="small mobile">iva incluido</span>
                </p>
                <p className="secondary impact">$20.700</p>
              </div>
            </div>
            <div className="element-block">
              <div className='price-element'>
                <p>Precio sugerido de venta</p>
                <p className="secondary low-impact">$4.500</p>
              </div>
            </div>
            <div className="element-block">
              <div>
                <p>
                  Duración: <span className="primary">1 año</span>
                </p>
              </div>
              <div className="right row">
                <p>Formato:</p>
                <QtyBox product={{ sale_format: 6 }} padding="0"></QtyBox>
              </div>
            </div>
            <div className="element-block">
              <p>
                Tiempo estimado de entrega: <span className="primary">3 días</span>
              </p>
            </div>
            <hr />
            <div className="element-block">
              <p className="add-cart mobile">Agregar al carrito:</p>
              <QtyAddProduct
                product={{}}
                addItem={() => console.log('hola')}
                removeItem={() => console.log('eliminado')}
                cartItems={[]}
              />
              <ButtonSecondary value="Agregar al carro" fontSize="1rem" className="desktop" />
              <Icon className="desktop gray">share</Icon>
            </div>
            <hr className="desktop" />
            <div className="element-block">
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
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio magnam corrupti dolores possimus sequi,
                eaque tempora, dolorum quo eveniet repellat accusantium id dicta labore amet, omnis laborum voluptate
                error cupiditate.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore non molestiae enim veniam a dolorum id
                cum similique perspiciatis harum voluptate qui iure tenetur, saepe, quisquam consequatur at, adipisci
                natus.
              </p>
            </div>
          </details>
          <details>
            <summary>
              <h2>Usos</h2>
            </summary>
            <div className="details-content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio magnam corrupti dolores possimus sequi,
                eaque tempora, dolorum quo eveniet repellat accusantium id dicta labore amet, omnis laborum voluptate
                error cupiditate.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore non molestiae enim veniam a dolorum id
                cum similique perspiciatis harum voluptate qui iure tenetur, saepe, quisquam consequatur at, adipisci
                natus.
              </p>
            </div>
          </details>
          <details>
            <summary>
              <h2>Mantenimiento</h2>
            </summary>
            <div className="details-content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio magnam corrupti dolores possimus sequi,
                eaque tempora, dolorum quo eveniet repellat accusantium id dicta labore amet, omnis laborum voluptate
                error cupiditate.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore non molestiae enim veniam a dolorum id
                cum similique perspiciatis harum voluptate qui iure tenetur, saepe, quisquam consequatur at, adipisci
                natus.
              </p>
            </div>
          </details>
        </div>
        <div className="categories mobile">
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

          .price-element{
            display: flex;
            flex-direction: column;
            gap: .5rem;
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