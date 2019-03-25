import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { configureStore } from './stores/configureStore'

const App = () => <div />
//@ts-ignore
const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
