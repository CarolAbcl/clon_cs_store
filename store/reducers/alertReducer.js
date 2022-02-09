import * as types from '../types'

const initialState = {}

export const alertReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.EXECUTE_ALERT:
      return {...action.payload}

    default:
      return state
  }
}
