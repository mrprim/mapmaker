import React from 'react'
import { connect } from 'react-redux'
import './index.scss'

const Background = ({ isDragging }) =>
  <div className={!isDragging ? 'background' : 'background fast'}>
    <div id='stars' />
    <div id='stars2' />
    <div id='stars3' />
  </div>

const mapStateToProps = state => ({
  isDragging: state.isDragging
})

export default connect(mapStateToProps)(Background)
