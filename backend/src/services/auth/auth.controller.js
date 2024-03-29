import jwt from 'jsonwebtoken'
import config from 'config'

import { response } from '../../helpers/responses'
import crypt from './libs/crypt'
import User from './user.model'
import { validateRegister } from './auth.validator'

export const signin = async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  if (!user) {
    return response(404, 'Invalid credentials', null, res)
  }

  const isValidPassword = await crypt.validPassword(password, user.password)

  if (!isValidPassword) {
    return response(401, 'Invalid credentials', null, res)
  }

  const token = jwt.sign({ id: user._id, email: user.email }, config.get('auth.word'))

  return response(
    200,
    'Login success',
    { token, userInfo: { urlImg: user.urlImg, name: user.name, _id: user._id } },
    res
  )
}

export const signup = async (req, res) => {
  const { error } = validateRegister(req.body)
  if (error) {
    return response(400, error.details[0].message, null, res)
  }

  const { name, urlImg, password, role } = req.body

  let email = `${name.split(' ').join('.').toLowerCase()}@projectify.com`

  const user = await User.findOne({ email })
  if (user) {
    email = `${email.split('@projectify.com')[0]}${Math.floor(Math.random() * 100)}@projectify.com`
  }

  const newUser = new User({
    name,
    email,
    urlImg,
    password: await crypt.encrypt(password),
    role,
  })

  const userSaved = await newUser.save()

  return response(
    200,
    'User created',
    {
      name: userSaved.name,
      email: userSaved.email,
      role: userSaved.role,
      createdAt: userSaved.createdAt,
    },
    res
  )
}
