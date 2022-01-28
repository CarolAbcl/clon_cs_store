export const initialState = {
  cart: [],
}

export const actionTypes = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_ITEM: 'REMOVE_ITEM',
  ADD_TO_CART_INPUT: 'ADD_TO_CART_INPUT',
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      let exist = state.cart.find((product) => product.ID_product === action.product.ID_product)
      return exist
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.ID_product === action.product.ID_product ? { ...item, qty: item.qty + 1 } : item
            ),
          }
        : { ...state, cart: [...state.cart, { ...action.product, qty: 1 }] }
    case 'REMOVE_ITEM':
      let removeOne = state.cart.map((item) =>
        item.ID_product === action.product.ID_product ? { ...item, qty: item.qty - 1 } : item
      )
      return {
        ...state,
        cart: removeOne.filter((item) => item.qty > 0),
      }
    case 'ADD_TO_CART_INPUT':
      let existProduct = state.cart.find((product) => product.ID_product === action.product.ID_product)
      return action.e == '' || action.e == 0
        ? {
            ...state,
            cart: state.cart.filter((item) => item.ID_product !== action.product.ID_product),
          }
        : existProduct
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.ID_product === action.product.ID_product ? { ...item, qty: parseInt(action.e) } : item
            ),
          }
        : { ...state, cart: [...state.cart, { ...action.product, qty: parseInt(action.e) }] }
    default:
      return state
  }
}
export default reducer
