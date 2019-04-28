import { fetchAddressByZipCode, fetchMapCoordinates } from '../address'

describe('#services', () => {
  beforeEach(() => {
    fetch.resetMocks()
  })

  describe('#address', () => {
    const zipcode = 'MY_ZIP_CODE'

    describe('#fetchAddressByZipCode', () => {
      it('should return the result', async () => {
        fetch.mockResponseOnce(JSON.stringify({ test: 'test' }))
        const result = await fetchAddressByZipCode(zipcode)

        expect(fetch).toBeCalled()
        expect(fetch).toBeCalledWith(`https://viacep.com.br/ws/${zipcode}/json`)
        expect(result).toEqual({ test: 'test' })
      })

      it('should throw error when erro is true', async () => {
        fetch.mockResponseOnce(JSON.stringify({ erro: true }))

        try {
          const result = await fetchAddressByZipCode(zipcode)

          expect(fetch).toBeCalled()
          expect(result).toThrowError()
        } catch (e) {}
      })
    })

    describe('#fetchMapCoordinates', () => {
      const address = {
        cep: zipcode,
        localidade: 'localidade',
        logradouro: 'logradouro'
      }

      const addresQueryString = `${address.cep} ${address.localidade}  ${address.logradouro}`

      it('should return the result', async () => {
        fetch.mockResponseOnce(JSON.stringify(
          {
            results: [
              {
                geometry: {
                  location: 'location'
                }
              }
            ]
          }
        ))
        const result = await fetchMapCoordinates(address)

        expect(fetch).toBeCalled()
        expect(fetch).toBeCalledWith(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${addresQueryString}&key=MY_MOCKED_KEY`
        )
        expect(result).toEqual('location')
      })

      it('should return empty object when no results', async () => {
        fetch.mockResponseOnce(JSON.stringify({ results: { wrong: { object: { path: {} } } } }))

        const result = await fetchMapCoordinates(address)

        expect(fetch).toBeCalled()
        expect(fetch).toBeCalledWith(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${addresQueryString}&key=MY_MOCKED_KEY`
        )
        expect(result).toEqual({})
      })
    })
  })
})
