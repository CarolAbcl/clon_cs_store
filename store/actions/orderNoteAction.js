import * as types from '../types'

export const addNoteOrder = (note) => (dispatch) => {
  dispatch({
    type: types.ADD_NOTE_ORDER,
    payload: note,
  })
}
