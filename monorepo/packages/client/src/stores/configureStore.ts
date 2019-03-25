import { createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { rootReducer } from './ducks'
import { rootSaga } from './saga'

export function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(rootReducer, initialState)

  sagaMiddleware.run(rootSaga)

  return store
}
