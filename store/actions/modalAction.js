import * as types from '../types'

export const openModal = (open, modalType) => (dispatch) => {
  dispatch({
    type: types.OPEN_MODAL,
    open,
    modalType,
  })
}
export const closeModal = () => (dispatch) => {
  dispatch({
    type: types.CLOSE_MODAL,
  })
}
