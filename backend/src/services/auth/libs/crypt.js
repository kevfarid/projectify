import bcrypt from 'bcrypt'
import config from 'config'

const validPassword = async (password, passwordCrypt) => {
  const isValid = await bcrypt.compare(password, passwordCrypt)
  return isValid
}

const encrypt = async (password) => {
  const salt = await bcrypt.genSalt(Number(config.get('auth.salt')))
  const hash = await bcrypt.hash(password, salt)
  return hash
}

export default {
  validPassword,
  encrypt,
}
