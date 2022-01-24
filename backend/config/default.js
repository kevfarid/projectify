import ENV from '../src/setupENV'

export const env = 'local'

export const server = {
  port: 4000,
  domain: 'localhost',
  logger: ':method :url :status :response-time ms - :res[content-length]',
}

export const database = {
  uri: `mongodb+srv://${ENV.DB_USER}:${ENV.DB_PASS}@${ENV.DB_HOST}/${ENV.DB_NAME}?retryWrites=true&w=majority`,
}

export const auth = {
  salt: ENV.SALT,
  word: ENV.WORD,
}
