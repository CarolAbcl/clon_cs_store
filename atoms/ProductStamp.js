import Image from 'next/image'

function ProductStamp({ width }) {
  // CardPrice recibe:
  // width: el ancho del contenedor del formato caja
  return (
    <>
      <div>
        <Image src={'https://imgur.com/CWJMYZ4.png'} width={35} height={35} alt="Sello"></Image>
      </div>

      <style jsx>
        {`
          div {
            display: flex;
            flex-direction: row;
            align-items: baseline;
            justify-content: center;
            width: ${width}%;
          }
        `}
      </style>
    </>
  )
}

export default ProductStamp
