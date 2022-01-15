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
  uri: `mongodb+srv://${ENV.DB_USER}:${ENV.DB_PASS}@${ENV.DB_HOST}/${ENV.DB_NAME}?retryWrites=true&w=majority`,
}
