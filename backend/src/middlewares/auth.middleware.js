import User from '../services/auth/user.model'
import { response } from '../helpers/responses'

const hasRole = (role) => {
  return async (req, res, next) => {
    const user = await User.findById(req.user.id)
    if (user.role === role) {
      return next()
    }

    return response(401, 'Unauthorized', null, res)
  }
}

export default hasRole
