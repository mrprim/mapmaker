import React from 'react'
import { connect } from 'react-redux'
import Background from '../Background'
import { bindActionCreators } from 'redux'
import { compose, lifecycle } from 'recompose'
import * as actions from '../../actions'

const Canvas = ({ viewBox, children, onPointerDown, onPointerUp, onPointerMove, onWheel }) =>
  <div>
    <Background />
    <svg
      id='canvas'
      preserveAspectRatio='xMaxYMax'
      viewBox={viewBox}
    >
      { children }
    </svg>
  </div>

const mapStateToProps = state => ({
  viewBox: [
    state.windowW / -2,
    state.windowH / -2,
    state.windowW,
    state.windowH
  ]
})

const mapDispatchToProps = dispatch => bindActionCreators({
  setWindowSize: actions.setWindowSize
}, dispatch)

const lifecycleHandlers = {
  componentDidMount () {
    const setWindowSize = this.props.setWindowSize
    setWindowSize(window.innerHeight, window.innerWidth)
    window.addEventListener('resize', ev => setWindowSize(window.innerHeight, window.innerWidth))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle(lifecycleHandlers)
)(Canvas)
