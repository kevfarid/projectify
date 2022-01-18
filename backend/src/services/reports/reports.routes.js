import { Router } from 'express'
import * as reports from './reports.controller'

const router = Router()

router.get('/', reports.getReports)
router.get('/:id', reports.getReportById)
router.post('/', reports.createReport)
router.put('/:id', reports.updateReport)

export default router
