import React from 'react'

import App from '../../templates/App'
import { StoreProvider } from '../../../contexts/store'

const AppPage = () =>
  <StoreProvider>
    <App />
  </StoreProvider>

export default AppPage
