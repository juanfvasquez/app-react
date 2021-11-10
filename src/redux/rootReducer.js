import { combineReducers } from 'redux'

import { montoReducer } from './reducers/montoReducer'

const reducer = combineReducers({
  cuenta: montoReducer
})

export default reducer