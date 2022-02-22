import priceFormat from './priceFormat'

export const sendOrder = (producers, noteOrder) => {
  //guadará el monto total del pedido
  let msgetotalAmount = ''
  //guarda el total por productor
  const amountTotalProducer = []
  //recorre cada productor
  const infoOrder = producers.map((item) => {
    // se guarda en la constante el nombre del productor
    const nameProducer = '%0A*Productor:*%20' + item.producerInfo.brand_name
    //total monto por productos
    amountTotalProducer.push(item.products.reduce((a, cur) => a + cur.price_package * cur.qty, 0))
    // total monto de pedido
    const totalAmountSum = amountTotalProducer.reduce((a, cur) => a + cur, 0)
    //se recorren los productos para obtener los nombres cantidad y subtotales
    const products = item.products.map((product) => {
      //monto total por producto
      const totalProduct = priceFormat(product.qty * product.price_package)
      return (
        '%0A-%20Producto:%20' +
        product.name +
        '%20%20Cantidad:%20' +
        product.qty +
        '%0A%20Total producto:%20' +
        totalProduct
      )
    })
    // mensaje del monto total del pedido enviado por whatsApp { %0A = salto de linea, %20 = espacio }
    msgetotalAmount = '%0A-%20*Monto total pedido:*%20' + '*' + priceFormat(totalAmountSum) + '*'

    return nameProducer + products
  })
  
  // nota del pedido
  const textNoteOrder = noteOrder ? '%0A-%20*Nota del pedido:%20' + noteOrder + '*' : ''

  const urlDesktop = 'https://api.whatsapp.com/send?phone='
  const msjsaludo = 'Hola ComeS, adjunto mi pedido:'

  return `${urlDesktop}${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}&text=${msjsaludo}${infoOrder}${msgetotalAmount}${textNoteOrder}`
}


export const sendWhatsApp = () => {
  const urlDesktop = 'https://api.whatsapp.com/send?phone='
  const msjsaludo = 'Hola ComeS, ...'

  return `${urlDesktop}${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}&text=${msjsaludo}`
}