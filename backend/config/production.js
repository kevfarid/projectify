import ENV from '../src/setupENV'

export const env = 'production'

export const server = {
  port: 80,
  domain: 'domain.com',
  logger: ':method :url :status :res[content-length] - :response-time ms',
}

export const database = {
  name: ENV.DB_NAME,
  host: ENV.DB_HOST,
  user: ENV.DB_USER,
  pass: ENV.DB_PASS,
  // uri: 'uri of database'
}
