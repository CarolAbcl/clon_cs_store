import { combineReducers } from 'redux'
import { filtersReducer } from './filtersReducer'
import { cartReducer } from './cartReducer'
import { alertReducer } from './alertReducer'

export default combineReducers({
  filters: filtersReducer,
  cart: cartReducer,
  alert: alertReducer
})
