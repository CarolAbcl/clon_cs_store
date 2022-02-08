import { combineReducers } from 'redux'
import { filtersReducer } from './filtersReducer'
import { cartReducer } from './cartReducer'
import { alertReducer } from './alertReducer'
import { producerReducer } from './producerReducer'

export default combineReducers({
  filters: filtersReducer,
  cart: cartReducer,
  alert: alertReducer,
  producers: producerReducer,
})
