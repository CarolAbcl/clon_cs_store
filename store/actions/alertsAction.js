import * as types from '../types'

export const executeAlert = (alert) => (dispatch) => {
  dispatch({
    type: types.EXECUTE_ALERT,
    payload: alert,
  })
}