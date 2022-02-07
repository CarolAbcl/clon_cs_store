import * as types from '../types'

export const addProducer = ({producer}) => (dispatch) => {
  dispatch({
    type: types.ADD_PRODUCER,
    payload: producer,
  })
}