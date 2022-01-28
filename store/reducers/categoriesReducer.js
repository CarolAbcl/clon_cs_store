import * as types from '../types'

const initialState = []

export const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CATEGORIES:
      return [...state, ...action.payload]
    default:
      return state
  }
}
