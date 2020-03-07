import * as actions from '../constants/actionTypes'

export const registerEntity = (id, data) => ({
  type: actions.REGISTER_ENTITY,
  id,
  data
})

export const select = id => ({
  type: actions.SELECT,
  id
})

export const dragStart = ev => ({
  type: actions.DRAG_START
})

export const drag = ev => ({
  type: actions.DRAG,
  movementX: ev.movementX,
  movementY: ev.movementY
})

export const dragEnd = ev => ({
  type: actions.DRAG_END
})

export const zoom = ev => ({
  type: actions.ZOOM,
  amount: ev.deltaY > 0 ? 7 / 8 : 8 / 7
})

export const setWindowSize = (h, w) => ({
  type: actions.SET_WINDOW_SIZE,
  h,
  w
})
