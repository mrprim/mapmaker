import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { compose, withHandlers } from 'recompose'
import * as actions from '../../actions'

const Controls = ({ children, onPointerDown, onPointerUp, onPointerMove, onWheel }) =>
  <div
    onPointerDown={onPointerDown}
    onPointerMove={onPointerMove}
    onPointerUp={onPointerUp}
    onPointerLeave={onPointerUp}
    onWheel={onWheel}
    style={{touchAction: 'none'}}
  >
    { children }
  </div>

const mapStateToProps = state => ({
  isDragging: state.isDragging
})

const mapDispatchToProps = dispatch => bindActionCreators({
  dragStart: actions.dragStart,
  drag: actions.drag,
  dragEnd: actions.dragEnd,
  zoom: actions.zoom
}, dispatch)

const handlers = {
  onPointerDown: props => ev => props.dragStart(ev),
  onPointerUp: props => ev => props.dragEnd(ev),
  onPointerMove: props => ev => props.isDragging && props.drag(ev),
  onWheel: props => ev => props.zoom(ev)
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers(handlers)
)(Controls)
