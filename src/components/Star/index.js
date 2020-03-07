import React from 'react'
import Aura from '../Aura'

const Star = props =>
  <g>
    <Aura style={{pointerEvents: 'none'}} {...props} spread={props.spread} />
    <polygon points={`
      ${props.pos[0] - props.size},${props.pos[1]}
      ${props.pos[0]}, ${props.pos[1] - props.size}
      ${props.pos[0] + props.size},${props.pos[1]}
      ${props.pos[0]}, ${props.pos[1] + props.size}
    `} fill={props.color} />
    <animateTransform
      attributeType='xml'
      attributeName='transform'
      type='rotate'
      from={`360 ${props.pos[0]} ${props.pos[1]}`}
      to={`0 ${props.pos[0]} ${props.pos[1]}`}
      dur='20s'
      additive='sum'
      repeatCount='indefinite' />
  </g>

export default Star
