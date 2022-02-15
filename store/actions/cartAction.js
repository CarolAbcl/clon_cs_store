import * as types from '../types'

export const addItem = (product) => (dispatch) => {
  dispatch({
    type: types.ADD_ITEM_CART,
    payload: product,
  })
}
export const removeItem = (product) => (dispatch) => {
  dispatch({
    type: types.REMOVE_ITEM_CART,
    payload: product,
  })
}
export const addItemInput = (product, e) => (dispatch) => {
  dispatch({
    type: types.ADD_TO_CART_INPUT,
    payload: product,
    input: e,
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
