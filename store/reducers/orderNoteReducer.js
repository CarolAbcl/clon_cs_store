import * as types from '../types'

const initialState = []

export const orderNoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_NOTE_ORDER:
      return action.payload

    default:
      return state
  }
}
