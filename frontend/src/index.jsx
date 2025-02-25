import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

// Middlewares
import promise from 'redux-promise';
import multi from 'redux-multi';
import thunk from 'redux-thunk'

import App from './main/app.jsx'
import reducers from './main/reducers.js'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
   && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(promise, multi, thunk)(createStore)(reducers, devTools)

ReactDOM.render(
   <Provider store={ store }>
      <App />
   </Provider>
, document.getElementById('app'))