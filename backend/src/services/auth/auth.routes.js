import { Router } from 'express'
import * as authController from './auth.controller'

const router = Router()

router.post('/login', authController.signin)
router.post('/register', authController.signup)

export default router
