import * as types from '../types'

export const setfilter = (filterName) => (dispatch) => {
  dispatch({
    type: types.SET_FILTER,
    payload: filterName,
  })
}

export const removefilter = (filterName) => (dispatch) => {
  dispatch({
    type: types.REMOVE_FILTER,
    payload: filterName,
  })
}

export const resetfilters = () => (dispatch) => {
  dispatch({
    type: types.RESET_FILTERS,
  })
}
