import React, { Dispatch } from 'react'

interface IState {
  address: {
    logradouro?: string
    bairro?: string
    localidade?: string
    uf?: string
    cep?: string
    mapsCoordinates?: {
      lat: number
      lng: number
    }
  }
  status: string
}

interface IFetchAddress {
  payload: Object
  type: 'FETCH_ADDRESS'
}

interface IFetchAddressFail {
  type: 'FETCH_ADDRESS_FAIL'
}

interface IFetchAddressClose {
  type: 'FETCH_ADDRESS_CLOSE'
}

interface IStoreProvider {
  children: any
}

export type Actions = IFetchAddress | IFetchAddressFail | IFetchAddressClose;

interface IContextProps { state: IState; dispatch: Dispatch<Actions>; }

export const Store = React.createContext({} as IContextProps);

const initialState = {
  address: {},
  status: ''
}

function reducer(state: IState, action: Actions) {
  switch (action.type) {
    case 'FETCH_ADDRESS':
      return { ...state, address: action.payload, status: 'LOADED' }
    case 'FETCH_ADDRESS_FAIL':
      return { ...state, address: {}, status: 'ERROR' }
    case 'FETCH_ADDRESS_CLOSE':
      return { ...state, address: {}, status: '' }
    default:
      return state;
  }
}

export function StoreProvider(props: IStoreProvider) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };

  return (
    <Store.Provider value={value}>
      {props.children}
    </Store.Provider>
  )
}
