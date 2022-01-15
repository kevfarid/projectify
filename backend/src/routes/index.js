import { Router } from 'express'
import helloWorld from '../services/helloworld/helloworld.routes'

const router = Router()

router.use('/helloworld', helloWorld)

export default router
