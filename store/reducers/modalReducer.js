import * as types from '../types'

const initialState = {
  open: false,
  modalType: null,
}

export const useModal = (state = initialState, action) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return {
        ...state,
        open: action.open,
        modalType: action.modalType,
      }
    case 'CLOSE_MODAL':
      return initialState
    default:
      return initialState
  }
}
