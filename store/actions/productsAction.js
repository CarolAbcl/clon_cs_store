import * as types from '../types'

export const fetchproducts = () => async (dispatch) => {
  const res = await fetch(`/api/product/products`)
  const resJson = await res.json()
  dispatch({
    type: types.GET_PRODUCTS,
    payload: resJson.data,
  })
}
