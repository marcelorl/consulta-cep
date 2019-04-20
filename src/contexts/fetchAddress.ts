import React from 'react'

import { fetchAddressByZipCode, fetchMapCoordinates } from '../services/address'

export default async (dispatch: any, zipCode: string) => {
  try {
    const addressData = await fetchAddressByZipCode(zipCode)
    const mapsCoordinates = await fetchMapCoordinates(zipCode)

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
