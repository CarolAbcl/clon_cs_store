import { loadState, saveState } from '../SaveLocalStorage'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './reducers'

const initialState = loadState() // El estado inicial será lo obtenido del localStorage

const middleware = [thunk]

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

// Si el estado cambia capturamos ese cambio y lo guardamos
store.subscribe(function () {
  saveState(store.getState())
})

export default store
