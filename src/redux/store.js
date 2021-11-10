import { compose } from 'redux'
import { createStore } from 'redux'

import reducer from './rootReducer'

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  {},
  enhancer()
)

export default store