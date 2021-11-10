import React from 'react'
import ReactDOM from 'react-dom'

// import App4, { App, App2, App3 as app3 } from './components/app'
import { App } from './components/app'

// import 'bootstrap/dist/css/bootstrap.min.css'

import { Provider } from 'react-redux'
import store from './redux/store'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'))