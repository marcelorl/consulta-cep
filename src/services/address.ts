import { get } from 'lodash'

import { IAddress } from '../models'

export const fetchAddressByZipCode = async (zipCode: string) => {
  const address = await fetch(`https://viacep.com.br/ws/${zipCode}/json`)
  const addressJSON = await address.json()

  if (addressJSON.erro) throw new Error()

  return addressJSON
}

export const fetchMapCoordinates = async (address: IAddress) => {
  const addresQueryString = `${address.cep} ${address.localidade}  ${address.logradouro}`

  const mapsCoordinates = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${addresQueryString}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`
  )
  const mapsCoordinatesJSON = await mapsCoordinates.json()

  return get(mapsCoordinatesJSON, 'results[0].geometry.location', {})
}
