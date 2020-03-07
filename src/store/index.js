import { createStore, applyMiddleware } from 'redux'
import reducer from '../reducers'
import sagaMiddleware from './sagaMiddleware'
import { createLogger } from 'redux-logger'

const logger = createLogger({})
// create the saga middleware
const store = createStore(
  reducer,
  applyMiddleware(
    sagaMiddleware,
    logger
  )
)

export default store
