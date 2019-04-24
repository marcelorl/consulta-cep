import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { Reset } from 'styled-reset'

import { globalTheme } from './globalTheme'
import App from './components/pages/App'

ReactDOM.render(
  <ThemeProvider theme={globalTheme}>
    <div>
      <Reset />
      <App />
    </div>
  </ThemeProvider>,
  document.getElementById('root')
)
