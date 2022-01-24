import jwt from 'jsonwebtoken'
import { response } from '../helpers/responses'

const verifyToken = (req, res, next) => {
  const { token } = req.headers

  if (!token) {
    return response(401, 'Unauthorized', null, res)
  }

  try {
    const decoded = jwt.verify(token, process.env.WORD)
    req.user = decoded
    return next()
  } catch (err) {
    return response(401, 'Unauthorized', null, res)
  }
}

export default verifyToken
