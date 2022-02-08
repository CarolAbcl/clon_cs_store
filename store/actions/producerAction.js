import * as types from '../types'

export const addProducer = (payload) => (dispatch) => {
  dispatch({
    type: types.ADD_PRODUCER,
    payload: payload,
  })
}