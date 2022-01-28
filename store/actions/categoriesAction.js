import * as types from '../types'

export const fetchcategories = () => async (dispatch) => {
  const res = await fetch(`/api/category/categories`)
  const resJson = await res.json()
  dispatch({
    type: types.GET_CATEGORIES,
    payload: resJson.data
  })
}