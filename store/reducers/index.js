import { combineReducers } from 'redux'
import { filtersReducer } from './filtersReducer'
import { cartReducer } from './cartReducer'

export default combineReducers({
  filters: filtersReducer,
  cart: cartReducer,
})
