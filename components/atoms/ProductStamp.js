import Image from 'next/image'

function ProductStamp() {
  return (
    <>
      <div>
        <Image src={'https://imgur.com/CWJMYZ4.png'} width={30} height={30} alt="Sello"></Image>
      </div>

      <style jsx>
        {`
          div {
            display: flex;
            flex-direction: row;
            align-items: baseline;
            justify-content: center;
            width: auto;
          }
        `}
      </style>
    </>
  )
}

export default ProductStamp
