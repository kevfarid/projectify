import { config } from 'dotenv'

config()

export default {
  DB_NAME: process.env.DB_NAME,
  DB_HOST: process.env.DB_HOST,
  DB_USER: process.env.DB_USER,
  DB_PASS: process.env.DB_PASS,
  WORD: process.env.WORD,
  SALT: process.env.SALT,
}
