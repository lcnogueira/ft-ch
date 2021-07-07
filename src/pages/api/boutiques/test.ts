import { createMocks } from 'node-mocks-http'
import handler from 'pages/api/boutiques'

describe('/api/boutiques', () => {
  it('Should return an error message if latitude or longitude is not provided', async () => {
    const { req, res } = createMocks({
      method: 'GET'
    })

    await handler(req, res)

    expect(res.statusCode).toBe(400)
    expect(res._getJSONData()).toMatchObject({
      message: 'You should provide both latitude and longitude'
    })
  })
})
