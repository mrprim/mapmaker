import * as actionTypes from '../constants/actionTypes'

const initialState = {
  offset: [0, 250],
  scale: 1,
  entities: {},
  selected: [ ],
  isDragging: false,
  windowH: 0,
  windowW: 0
}

const initialStar = {
  color: 'white',
  size: 20,
  spread: 2
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REGISTER_ENTITY: return registerEntity(state, action)
    case actionTypes.SELECT: return select(state, action)
    case actionTypes.DRAG_START: return dragStart(state, action)
    case actionTypes.DRAG: return drag(state, action)
    case actionTypes.DRAG_END: return dragEnd(state, action)
    case actionTypes.ZOOM: return zoom(state, action)
    case actionTypes.SET_WINDOW_SIZE: return setWindowSize(state, action)
    default: return state
  }
}

const registerEntity = (state, { id, data }) => ({
  ...state,
  entities: {
    ...state.entities,
    [id]: {
      ...initialStar,
      ...data
    }
  }
})

const select = (state, action) => {
  let selected = [...state.selected]
  if (state.selected.includes(action.id)) {
    selected = selected.filter(s => s !== action.id)
  } else {
    selected.push(action.id)
  }
  return {
    ...state,
    selected
  }
}

const dragStart = (state, action) => ({
  ...state,
  isDragging: true
})

const drag = (state, action) => ({
  ...state,
  offset: [
    state.offset[0] - action.movementX / state.scale,
    state.offset[1] - action.movementY / state.scale
  ]
})

const dragEnd = (state, action) => ({
  ...state,
  isDragging: false
})

const zoom = (state, action) => ({
  ...state,
  scale: state.scale * action.amount
})

const setWindowSize = (state, action) => ({
  ...state,
  windowH: action.h,
  windowW: action.w
})

export default reducer
