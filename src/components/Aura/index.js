import React from 'react'

const Aura = props =>
  <g>
    <circle cx={props.pos[0]} cy={props.pos[1]} r={props.size * props.spread * 0.5} fill={props.color} fillOpacity='.3' />
    <circle cx={props.pos[0]} cy={props.pos[1]} r={props.size * props.spread * 0.53} fill={props.color} fillOpacity='.1' />
    <circle cx={props.pos[0]} cy={props.pos[1]} r={props.size * props.spread * 0.55} fill={props.color} fillOpacity='.1' />
    <circle cx={props.pos[0]} cy={props.pos[1]} r={props.size * props.spread * 0.60} fill={props.color} fillOpacity='.1' />
    <circle cx={props.pos[0]} cy={props.pos[1]} r={props.size * props.spread * 0.77} fill={props.color} fillOpacity='.1' />
    <circle cx={props.pos[0]} cy={props.pos[1]} r={props.size * props.spread * 0.88} fill={props.color} fillOpacity='.1' />
    <circle cx={props.pos[0]} cy={props.pos[1]} r={props.size * props.spread * 1.0} fill={props.color} fillOpacity='.05' />
  </g>

export default Aura
