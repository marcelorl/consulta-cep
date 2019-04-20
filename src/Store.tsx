import React, { Dispatch } from 'react'

interface IState {
  address: Object
  error: boolean
}

interface IFetchAddress {
  payload: Object
  type: 'FETCH_ADDRESS'
}

interface IFetchAddressFail {
  error: Object
  type: 'FETCH_ADDRESS_FAIL'
}

interface IStoreProvider {
  children: any
}

export type Actions = IFetchAddress | IFetchAddressFail;

interface IContextProps { state: IState; dispatch: Dispatch<Actions>; }

export const Store = React.createContext({} as IContextProps);

const initialState = {
  address: {},
  error: false
}

function reducer(state: IState, action: Actions) {
  switch (action.type) {
    case 'FETCH_ADDRESS':
      return { ...state, address: action.payload };
    case 'FETCH_ADDRESS_FAIL':
      return { ...state, address: {}, error: true };
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
