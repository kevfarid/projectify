import request from 'supertest'
import app from '../app'

describe('Get /helloworld', () => {
  test('should get message', async () => {
    const { res } = await request(app).get('/api/helloworld').send()

    expect(res.statusCode).toBe(200)
  })
})
