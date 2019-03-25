import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from 'antd'
import { Provider } from 'react-redux'
import { configureStore } from './stores/configureStore'

const App = () => <Button type="primary">Button</Button>
//@ts-ignore
const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
