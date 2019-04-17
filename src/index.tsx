import React from 'react'
import ReactDOM from 'react-dom'

import { StoreProvider } from './Store'
import * as serviceWorker from './serviceWorker'

import App from './components/templates/App'

ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById('root')
)

serviceWorker.register({})
