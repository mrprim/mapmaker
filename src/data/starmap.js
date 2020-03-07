import * as types from '../constants/entityTypes'

export default {
  a: {
    type: types.STAR,
    label: 'Star Shadow Station',
    pos: [0, 0],
    color: '#877695',
    size: 25
  },
  b: {
    type: types.STAR,
    pos: [-20, 240],
    size: 13
  },
  c: {
    type: types.STAR,
    label: 'Uninhabited World',
    pos: [40, 65],
    size: 8,
    spread: 10
  },
  d: {
    type: types.PLANET,
    pos: [-104, 190]
  },
  e: {
    type: types.STAR,
    pos: [-220, 465],
    size: 11
  },
  f: {
    type: types.PLANET,
    pos: [230, 320],
    size: 20
  },
  g: {
    type: types.PLANET,
    parent: 'a',
    size: 2,
    color: 'green',
    orbitRadius: 20,
    orbitSpeed: 3
  },
  h: {
    type: types.STAR,
    parent: 'a',
    size: 18,
    color: 'purple',
    orbitRadius: 50
  },
  i: {
    type: types.STAR,
    parent: 'c',
    size: 3,
    color: 'purple',
    orbitRadius: 10,
    orbitSpeed: 15
  },
  j: {
    type: types.PATH,
    from: 'a',
    to: 'b'
  }
}
