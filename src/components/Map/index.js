import React from 'react'
import { bindActionCreators } from 'redux'
import { registerEntity } from '../../actions'
import { connect } from 'react-redux'
import { compose, lifecycle } from 'recompose'
import Canvas from '../Canvas'
import Body from '../Body'
import Glyph from '../Glyph'
import Controls from '../Controls'
import starmap from '../../data/starmap'
import './index.scss'

const Map = ({ entities }) =>
  <div className='game'>
    <Controls>
      <Canvas>
        <g className='body-layer'>
          {entities.map(renderBody)}
        </g>
        <g className='glyph-layer'>
          {entities.map(renderGlyph)}
        </g>
      </Canvas>
    </Controls>
  </div>

const renderBody = id => <Body key={id} id={id} />

const renderGlyph = id => <Glyph key={id} id={id} />

const mapStateToProps = state => ({
  entities: Object.keys(state.entities)
})

const mapDispatchToProps = dispatch => bindActionCreators({
  registerEntity
}, dispatch)

const lifecycleMethods = {
  componentDidMount () {
    const register = this.props.registerEntity
    Object.entries(starmap).map(([id, val]) => register(id, val))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle(lifecycleMethods)
)(Map)
