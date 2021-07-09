import { createMocks } from 'node-mocks-http'
import handler from 'pages/api/boutiques'
import { API_ENDPOINT } from 'config'
import {
  latitude,
  longitude,
  boutiquesResult,
  fullBoutiquesList
} from 'utils/mocks'
import fetchMock from 'jest-fetch-mock'

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
    fetchMock.mockIf(API_ENDPOINT, () => {
      return new Promise((resolve, reject) => reject())
    })

    const { req, res } = createMocks({
      method: 'GET',
      query: { latitude, longitude }
    })
    await handler(req, res)

    expect(res.statusCode).toBe(500)
    expect(res._getJSONData()).toMatchObject({
      message: 'Could not retrieve boutiques'
    })
  })

  it('should return an array with the 5 closest boutiques if latitude and longitude is provided', async () => {
    fetchMock.mockIf(API_ENDPOINT, () => {
      return new Promise((resolve) =>
        resolve({ status: 200, body: JSON.stringify(fullBoutiquesList) })
      )
    })

    const { req, res } = createMocks({
      method: 'GET',
      query: { latitude, longitude }
    })

    await handler(req, res)

    expect(res.statusCode).toBe(200)
    expect(res._getJSONData()).toHaveLength(5)
    expect(res._getJSONData()).toEqual(boutiquesResult)
  })
})
