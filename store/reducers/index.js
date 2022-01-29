import { combineReducers } from 'redux'
import { productsReducer } from './productsReducer'
import { categoriesReducer } from './categoriesReducer'
import { filtersReducer } from './filtersReducer'
import { cartReducer } from './cartReducer'

export default combineReducers({
  products: productsReducer,
  categories: categoriesReducer,
  filters: filtersReducer,
  cart: cartReducer,
})
