import * as entityTypes from '../constants/entityTypes'

export default id => state => {
  const entity = state.entities[id]
  if (entity.type === entityTypes.PATH) {
    return transformPathProperties(id, state)
  } else {
    return transformBodyProperties(id, state)
  }
}

const transformPathProperties = (id, state) => {
  const entity = state.entities[id]
  const toParent = state.entities[entity.to]
  const fromParent = state.entities[entity.from]

  const toPos = transformPosition(toParent.pos, state)
  const fromPos = transformPosition(fromParent.pos, state)

  return {
    ...entity,
    toPos,
    fromPos
  }
}

const transformBodyProperties = (id, state) => {
  const entity = state.entities[id]
  const parent = state.entities[entity.parent]
  let pos
  let orbitCenter
  let orbitRadius
  if (entityTypes.PATH) {

  }
  if (parent) {
    orbitCenter = transformPosition(parent.pos, state)
    orbitRadius = parent.size * state.scale + entity.orbitRadius * state.scale
    pos = [
      orbitCenter[0] + orbitRadius,
      orbitCenter[1]
    ]
  } else {
    pos = transformPosition(entity.pos, state)
  }
  return {
    ...entity,
    pos,
    orbitCenter,
    orbitRadius,
    scale: state.scale,
    size: state.scale * entity.size,
    isSelected: state.selected.includes(id)
  }
}

const transformPosition = (pos, state) => [
  (pos[0] - state.offset[0]) * state.scale,
  (pos[1] - state.offset[1]) * state.scale
]
