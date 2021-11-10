import { combineReducers } from 'redux'

import { montoReducer } from './reducers/montoReducer'
import { userReducer } from './reducers/userReducer'

const reducer = combineReducers({
  cuenta: montoReducer,
  user: userReducer,
})

export default reducer