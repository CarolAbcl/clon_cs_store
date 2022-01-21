import Image from 'next/image'

function ProductStamp() {
  return (
    <>
      <div>
        <Image
          src={'https://imgur.com/CWJMYZ4.png'}
          width={30}
          height={30}
          alt="Sello"
          layout="responsive"
          sizes="50vw"></Image>
      </div>

      <style jsx>
        {`
          div {
            width: 2rem;
          }
          @media (min-width: 480px) {
            div {
              width: 3rem;
            }
          }
        `}
      </style>
    </>
  )
}

export default ProductStamp
