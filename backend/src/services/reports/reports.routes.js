import { Router } from 'express'
import * as reports from './reports.controller'

const router = Router()

router.get('/', reports.getReports)
router.post('/', reports.createReport)
router.put('/:id', reports.setReport)

export default router
