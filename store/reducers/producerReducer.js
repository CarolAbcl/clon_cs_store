import * as types from '../types'

const initialState = []

export const producerReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_PRODUCER:
    const {cart} = action.payload 
    const producers = Array.from(new Set(cart.map(cartProduct => cartProduct.producer.brand_name)))
    let producersProducts = []
    producers.forEach((producer)=> {
      const producerItems = cart.filter(cartItem => cartItem.producer.brand_name === producer)
      const producerInfo = producerItems[0].producer
      const totalForProducer = producerItems.reduce((acu, cur) => acu + cur.qty, 0)
      const complete = totalForProducer >= producerInfo.min_producer_purchase
      const remaining = (producerInfo.min_producer_purchase - totalForProducer) >= 0 ? producerInfo.min_producer_purchase - totalForProducer : 0
      producersProducts.push({producerInfo, products: cart.filter(cartItem => cartItem.producer.brand_name === producer), totalItems: totalForProducer, complete, remaining})
    })
    
    return producersProducts

    default:
      return state
  }
}