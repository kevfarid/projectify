import ENV from '../src/setupENV'

export const env = 'local'

export const server = {
  port: 4000,
  domain: 'localhost',
  logger: ' ',
}

export const database = {
  name: ENV.DB_NAME,
  host: ENV.DB_HOST,
  user: ENV.DB_USER,
  pass: ENV.DB_PASS,
  // uri: 'uri of database'
}
