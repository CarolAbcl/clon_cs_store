import * as types from '../types'

export const addItem = (product, inCart) => (dispatch) => {
  dispatch({
    type: types.ADD_ITEM_CART,
    payload: product,
    inCart: inCart,
  })
}
export const removeItem = (product) => (dispatch) => {
  dispatch({
    type: types.REMOVE_ITEM_CART,
    payload: product,
  })
}
export const addItemInput = (product, e, inCart) => (dispatch) => {
  dispatch({
    type: types.ADD_TO_CART_INPUT,
    payload: product,
    input: e,
    inCart: inCart,
  })
}
export const deleteItemCart = (product) => (dispatch) => {
  dispatch({
    type: types.DELETE_ITEM_CART,
    payload: product,
  })
}
export const clearCart = () => (dispatch) => {
  dispatch({
    type: types.CLEAR_CART,
  })
}
