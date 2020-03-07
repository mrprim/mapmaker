import React from 'react'
import { connect } from 'react-redux'
import { compose, branch, renderNothing } from 'recompose'
import entitySelector from '../../selectors/getEntity'
import Star from '../Star'
import * as entityTypes from '../../constants/entityTypes'

const Body = props =>
  <g className='body'>
    <RenderBody {...props} />
    { props.orbitCenter ? <OrbitAnimation {...props} /> : null }
  </g>

const RenderBody = props => {
  switch (props.type) {
    case entityTypes.STAR:
      return <Star {...props} />
    default:
      return <circle cx={props.pos[0]} cy={props.pos[1]} r={props.size} fill={props.color} />
  }
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

const shouldNotRenderBody = ({ type }) => console.log('t', type) || type === entityTypes.PATH

export default compose(
  connect(mapStateToProps),
  branch(shouldNotRenderBody, renderNothing)
)(Body)
