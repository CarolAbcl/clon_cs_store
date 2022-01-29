import * as types from '../types'

export const initialState = {
  cart: [],
}

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_ITEM_CART:
      let exist = state.cart.find((product) => product.ID_product === action.payload.ID_product)
      return exist
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.ID_product === action.payload.ID_product ? { ...item, qty: item.qty + 1 } : item
            ),
          }
        : { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] }

    case types.REMOVE_ITEM:
      let removeOne = state.cart.map((item) =>
        item.ID_product === action.payload.ID_product ? { ...item, qty: item.qty - 1 } : item
      )
      return {
        ...state,
        cart: removeOne.filter((item) => item.qty > 0),
      }

    case types.ADD_TO_CART_INPUT:
      let existProduct = state.cart.find((product) => product.ID_product === action.payload.ID_product)
      return action.input == '' || action.e == 0
        ? {
            ...state,
            cart: state.cart.filter((item) => item.ID_product !== action.payload.ID_product),
          }
        : existProduct
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.ID_product === action.payload.ID_product ? { ...item, qty: parseInt(action.input) } : item
            ),
          }
        : { ...state, cart: [...state.cart, { ...action.payload, qty: parseInt(action.input) }] }

    default:
      return state
  }
}
