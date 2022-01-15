import { Router } from 'express'
import helloWorld from '../services/helloworld/helloworld.routes'
import auth from '../services/auth/auth.routes'

const router = Router()

router.use('/helloworld', helloWorld)
router.use('/auth', auth)

export default router
