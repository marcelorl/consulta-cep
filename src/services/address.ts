import { get } from 'lodash'

export const fetchAddressByZipCode = async (zipCode: string) => {
  const address = await fetch(`https://viacep.com.br/ws/${zipCode}/json`)
  const addressJSON = await address.json()

  if (addressJSON.erro) throw new Error()

  return addressJSON
}

export const fetchMapCoordinates = async (zipCode: string) => {
  const mapsCoordinates = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?components=postal_code:${zipCode}|country:BR&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`
  )
  const mapsCoordinatesJSON = await mapsCoordinates.json()

  return get(mapsCoordinatesJSON, 'results[0].geometry.location', {})
}
