import React from 'react'

import App from '../../templates/App'
import { Store, useAddress } from '../../../contexts/store'

const AppPage = () => {
  const [ state, action ] = useAddress()

  return (
    <Store.Provider value={{ state, action }}>
      <App />
    </Store.Provider>
  )
}

export default AppPage
