import 'jest-styled-components'
import { GlobalWithFetchMock } from 'jest-fetch-mock'

const customGlobal: GlobalWithFetchMock = global as GlobalWithFetchMock

customGlobal.fetch = require('jest-fetch-mock')
customGlobal.fetchMock = customGlobal.fetch
