export const minPurshase = (producers, cart) => {
  const minPurchase = producers.map((el) => {
    const products = cart.filter(product => product.producer.ID_producer === el.ID_producer)
    const totalForProducer = products.reduce((acu, cur) => acu + cur.qty, 0)
    const minRequired = el.min_producer_purchase
    const producer = el.brand_name
    const complete = totalForProducer >= minRequired
    const remaining = (minRequired - totalForProducer) >= 0 ? minRequired - totalForProducer : 0
    return {producer, complete, remaining}
  })

  console.log(minPurchase)
}