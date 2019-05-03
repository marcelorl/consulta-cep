import 'jest-styled-components'
import { GlobalWithFetchMock } from 'jest-fetch-mock'
import { toMatchDiffSnapshot } from 'snapshot-diff'

const customGlobal: GlobalWithFetchMock = global as GlobalWithFetchMock

customGlobal.fetch = require('jest-fetch-mock')
customGlobal.fetchMock = customGlobal.fetch

expect.extend({ toMatchDiffSnapshot })

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
