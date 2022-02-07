import { CardActions } from '@material-ui/core'
import * as types from '../types'

const initialState = []

export const producerReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_PRODUCER:
      const exist = state.some((e) => e.ID_producer === action.payload.ID_producer)
      const newState = exist ? state : [...state, action.payload]
      return newState

    default:
      return state
  }
}
