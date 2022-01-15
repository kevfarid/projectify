import Report from './report.model'
import Project from '../projects/project.model'

import { response } from '../../helpers/responses'

export const getReports = async (_, res) => {
  const reports = await Report.find().populate('by', '-_id -password -role -createdAt -updatedAt')
  response(200, 'Success', reports, res)
}

const addReportToProject = async (idReport, idProject) => {
  try {
    const project = await Project.findById(idProject)
    project.reports.push(idReport)
    const reportAdded = await project.save()
    return reportAdded._id
  } catch (_) {
    return null
  }
}

export const createReport = async (req, res) => {
  const { by, project, title, report, progress, state, completed } = req.body
  const reportData = {
    by,
    title,
    report,
    progress,
    state,
    completed,
  }
  const newReport = new Report(reportData)

  const idProject = await addReportToProject(newReport._id, project, res)
  if (!idProject) {
    return response(400, 'Error', 'Error creating report, not found project', res)
  }

  await newReport.save()
  return response(200, 'Success', newReport, res)
}

export const setReport = async (req, res) => {
  const { id } = req.params
  const { title, report, progress, state, completed } = req.body
  const reportData = {
    title,
    report,
    progress,
    state,
    completed,
  }
  const updatedReport = await Report.findByIdAndUpdate(id, reportData, { new: true })
  return response(200, 'Success', updatedReport, res)
}
