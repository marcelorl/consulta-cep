import React from 'react'

import {
  IState,
  IContextProps,
  Actions
} from '../models'
import { fetchAddressByZipCode, fetchMapCoordinates } from '../services/address'

export const Store = React.createContext({} as IContextProps)

const initialState: IState = {
  address: {},
  status: ''
}

const reducer = (state: IState, action: Actions) => {
  switch (action.type) {
    case 'FETCH_ADDRESS':
      return { ...state, address: action.payload, status: 'LOADED' }
    case 'FETCH_ADDRESS_FAIL':
      return { ...state, address: {}, status: 'ERROR' }
    case 'ADDRESS_RESET': {
      return { ...state, address: {}, status: '' }
    }
    default:
      return state
  }
}

export const useAddress = () => {
  const [ state, dispatch ] = React.useReducer(reducer, initialState)

  const fetchAddress = async (zipCode: string) => {
    try {
      const addressData = await fetchAddressByZipCode(zipCode)
      const mapsCoordinates = await fetchMapCoordinates(addressData)

      return dispatch({
        type: 'FETCH_ADDRESS',
        payload: {...addressData, mapsCoordinates}
      })
    } catch (e) {
      return dispatch({
        type: 'FETCH_ADDRESS_FAIL'
      })
    }
  }

  const resetState = () =>
    dispatch({
      type: 'ADDRESS_RESET'
    })

  return [ state, { fetchAddress, resetState } ]
}

export const StoreProvider = (props: any) => {
  const [ state, action ] = useAddress()

  return (
    <Store.Provider value={{ state, action }}>
      {props.children}
    </Store.Provider>
  )
}
