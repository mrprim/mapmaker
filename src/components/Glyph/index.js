import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { compose, withHandlers } from 'recompose'
import Highlight from '../Highlight'
import * as actions from '../../actions'
import './index.scss'
import entitySelector from '../../selectors/getEntity'
import * as entityTypes from '../../constants/entityTypes'

const Glyph = props =>
  <g className='glyph'>
    <RenderGlyph{...props} />
  </g>

const RenderGlyph = props => {
  console.log('p', props)
  switch (props.type) {
    case entityTypes.PATH:
      return <PathGlyph {...props} />
    default:
      return <BodyGlyph {...props} />
  }
}

const PathGlyph = props =>
  <path d={`M${props.toPos[0]} ${props.toPos[1]},${props.fromPos[0]} ${props.fromPos[1]}`} strokeWidth='5px' stroke='cyan' />

const BodyGlyph = props =>
  <g>
    <g>
      { props.orbitCenter ? <OrbitAnimation {...props} /> : null }
      { props.isSelected ? <Highlight {...props} /> : null }
      <ClickTarget {...props} />
      <Label {...props} />
    </g>
    { props.orbitCenter ? <circle style={{pointerEvents: 'none'}} cx={props.orbitCenter[0]} cy={props.orbitCenter[1]} r={props.orbitRadius} stroke={props.color} fill={'transparent'} /> : null }
  </g>

const ClickTarget = props =>
  <circle cx={props.pos[0]} cy={props.pos[1]} r={props.size} className='clickable' onClick={props.onClick} fill={'transparent'} />

const Label = props => {
  if (!props.isSelected) return null
  return (
    <text className='label' x={props.pos[0]} y={props.pos[1] + props.size + 30 * props.scale} fill='white'>
      {props.label}
    </text>
  )
}

const OrbitAnimation = ({ orbitCenter, orbitSpeed }) =>
  <animateTransform
    attributeType='xml'
    attributeName='transform'
    type='rotate'
    from={`360 ${orbitCenter[0]} ${orbitCenter[1]}`}
    to={`0 ${orbitCenter[0]} ${orbitCenter[1]}`}
    dur={10 / (orbitSpeed || 1) + 's'}
    additive='sum'
    repeatCount='indefinite' />

const mapStateToProps = (state, props) => ({
  ...entitySelector(props.id)(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
  select: actions.select
}, dispatch)

const handlers = ({
  onClick: ({ id, select }) => ev => select(id)
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers(handlers)
)(Glyph)
