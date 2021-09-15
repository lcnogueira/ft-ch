import axios from 'axios'
import { createMocks } from 'node-mocks-http'
import handler from 'pages/api/boutiques'
import { API_ENDPOINT } from 'config'
import {
  latitude,
  longitude,
  boutiquesResult,
  fullBoutiquesList
} from 'utils/mocks'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>
// import fetchMock from 'jest-fetch-mock'

describe('/api/boutiques', () => {
  it('should return an error message if latitude or longitude is not provided', async () => {
    const { req, res } = createMocks({
      method: 'GET'
    })

    await handler(req, res)

    expect(res.statusCode).toBe(400)
    expect(res._getJSONData()).toMatchObject({
      message: 'You should provide both latitude and longitude'
    })
  })

  it('should return an error message in case we have an internal server error', async () => {
    mockedAxios.get.mockImplementation(() => Promise.reject())

    const { req, res } = createMocks({
      method: 'GET',
      query: { latitude, longitude }
    })
    await handler(req, res)

    expect(axios.get).toHaveBeenCalledWith(API_ENDPOINT)
    expect(res.statusCode).toBe(500)
    expect(res._getJSONData()).toMatchObject({
      message: 'Could not retrieve boutiques'
    })
  })

  it('should return an array with the 5 closest boutiques if latitude and longitude is provided', async () => {
    mockedAxios.get.mockImplementation(() =>
      Promise.resolve({
        status: 200,
        data: fullBoutiquesList
      })
    )

    const { req, res } = createMocks({
      method: 'GET',
      query: { latitude, longitude }
    })

    await handler(req, res)

    expect(axios.get).toHaveBeenCalledWith(API_ENDPOINT)
    expect(res.statusCode).toBe(200)
    expect(res._getJSONData()).toEqual({ boutiques: boutiquesResult })
    expect(res._getJSONData().boutiques).toHaveLength(5)
  })
})
