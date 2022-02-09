import * as types from '../types'

const initialState = []

export const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_FILTER:
      return [...state, action.payload]

    case types.REMOVE_FILTER:
      return state.filter((filter) => filter !== action.payload)

    case types.RESET_FILTERS:
      return []

    default:
      return state
  }
}
