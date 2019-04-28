export interface IAddress {
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

export interface IState {
  address: IAddress
  status: string
}

export interface IContextProps {
  action: any
  state: any
}

interface IFetchAddress {
  payload: Object
  type: 'FETCH_ADDRESS'
}

interface IFetchAddressFail {
  type: 'FETCH_ADDRESS_FAIL'
}

interface IAddressReset {
  type: 'ADDRESS_RESET'
}

export type Actions = IFetchAddress | IFetchAddressFail | IAddressReset
