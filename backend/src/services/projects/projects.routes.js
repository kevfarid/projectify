import { Router } from 'express'
import * as projects from './projects.controller'

const router = Router()

router.get('/', projects.getProjects)
router.get('/:id', projects.getProjectsById)
router.post('/', projects.createProject)
router.put('/:id', projects.setProject)

export default router
