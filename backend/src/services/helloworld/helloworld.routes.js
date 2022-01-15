import { Router } from 'express'
import * as helloworld from './helloworld.controller'

const router = Router()

router.get('/', helloworld.showMessage)

export default router
