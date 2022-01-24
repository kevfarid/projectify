import { Router } from 'express'

import helloWorld from '../services/helloworld/helloworld.routes'
import auth from '../services/auth/auth.routes'
import projects from '../services/projects/projects.routes'
import reports from '../services/reports/reports.routes'

import authMiddleware from '../middlewares/auth.middleware'
import validateToken from '../middlewares/validateToken.middleware'

const router = Router()

const middlewares = [validateToken, authMiddleware('op')]

router.use('/auth', auth)

router.use('/helloworld', middlewares, helloWorld)
router.use('/projects', middlewares, projects)
router.use('/reports', middlewares, reports)

export default router
