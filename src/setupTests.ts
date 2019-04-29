import 'jest-styled-components'
import { GlobalWithFetchMock } from 'jest-fetch-mock'

const customGlobal: GlobalWithFetchMock = global as GlobalWithFetchMock

customGlobal.fetch = require('jest-fetch-mock')
customGlobal.fetchMock = customGlobal.fetch


const originalError = console.error
beforeAll(() => {
  console.error = (...args: any) => {
    if (/Warning.*not wrapped in act/.test(args[0])) {
      return
    }
    originalError.call(console, ...args)
  }
})

afterAll(() => {
  console.error = originalError
})
