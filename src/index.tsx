import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { Reset } from 'styled-reset'

import { StoreProvider } from './Store'
import * as serviceWorker from './serviceWorker'
import { globalTheme } from './globalTheme'

import App from './components/templates/App'

ReactDOM.render(
  <ThemeProvider theme={globalTheme}>
    <StoreProvider>
      <Reset />
      <App />
    </StoreProvider>
  </ThemeProvider>,
  document.getElementById('root')
)

serviceWorker.register({})
