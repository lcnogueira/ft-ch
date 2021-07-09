import 'next-image.mock'
import '@testing-library/jest-dom'
import 'jest-styled-components'
import dotenv from 'dotenv'
import jestMock from 'jest-fetch-mock'

dotenv.config({
  path: '.env.test.local'
})

jestMock.enableMocks()
