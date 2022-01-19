import { Router } from 'express'
import * as projects from './projects.controller'

const router = Router()

router.get('/', projects.getProjects)
router.get('/:id', projects.getProjectById)
router.post('/', projects.createProject)
router.put('/:id', projects.updateProject)

export default router
