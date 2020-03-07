import React from 'react'

const Highlight = ({ pos, size, scale }) =>
  <g>
    <rect x={pos[0] - size - 10} y={pos[1] - size - 10} height={size * 2 + 20} width={size * 2 + 20} fill='transparent' stroke='white' strokeWidth='2' />
  </g>

export default Highlight
