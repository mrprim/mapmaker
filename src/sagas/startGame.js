import sagaMiddleware from '../store/sagaMiddleware'
import { put, takeEvery, delay } from 'redux-saga/effects'

function * heartbeat () {
  yield takeEvery('START', tickSaga)
}

let lastTime = 0
function * tickSaga () {
  while (true) {
    const time = +new Date()
    const progress = time - lastTime
    var delayTime = Math.max(0, 16 - progress)
    lastTime = time + delayTime
    yield put({ type: 'UPDATE', progress })
    yield delay(delayTime)
  }
}

sagaMiddleware.run(heartbeat)
