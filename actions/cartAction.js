import { ADD_ITEM_CART, ADD_TO_CART_INPUT, REMOVE_ITEM } from '../types'

export const addItem = (product) => ({ type: ADD_ITEM_CART, product })
export const removeItem = (product) => ({ type: REMOVE_ITEM, product })
export const addItemInput = (product) => ({ type: ADD_TO_CART_INPUT, product })
