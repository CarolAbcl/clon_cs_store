import * as types from '../types'

export const initialState = []

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_ITEM_CART:
      let exist = state.find((product) => product.ID_product === action.payload.ID_product)
      return exist
        ? state.map((item) => (item.ID_product === action.payload.ID_product ? { ...item, qty: item.qty + 1 } : item))
        : [...state, { ...action.payload, qty: 1 }]

    case types.REMOVE_ITEM_CART:
      let removeOne = state.map((item) =>
        item.ID_product === action.payload.ID_product ? { ...item, qty: item.qty - 1 } : item
      )
      return removeOne.filter((item) => item.qty > 0)

    case types.ADD_TO_CART_INPUT:
      let existProduct = state.find((product) => product.ID_product === action.payload.ID_product)
      return action.input == '' || action.e == 0
        ? state.filter((item) => item.ID_product !== action.payload.ID_product)
        : existProduct
        ? state.map((item) =>
            item.ID_product === action.payload.ID_product ? { ...item, qty: parseInt(action.input) } : item
          )
        : [...state, { ...action.payload, qty: parseInt(action.input) }]
    case types.DELETE_ITEM_CART:
      return state.filter((item) => item.ID_product !== action.payload.ID_product)

    default:
      return state
  }
}
