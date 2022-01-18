import { getISOWeek } from 'date-fns'

import Report from './report.model'
import Project from '../projects/project.model'

import { response } from '../../helpers/responses'

export const getReports = async (_, res) => {
  const reports = await Report.find().populate('by', '-_id -password -role -createdAt -updatedAt')
  response(200, 'Success', reports, res)
}

const addReportToProject = async (idReport, idProject) => {
  try {
    const project = await Project.findByIdAndUpdate(idProject, {
      $push: { reports: idReport },
    })
    return project._id
  } catch (_) {
    return null
  }
}

const operationType = async (progress, idReport) => {
  try {
    const report = await Report.findById(idReport)
    if (progress > report.progress) {
      return 'add'
    }
    if (progress < report.progress) {
      return 'substract'
    }

    return 'no change'
  } catch (_) {
    return null
  }
}

const sumToProgressTotal = async (idProject, progress, idReport) => {
  try {
    const project = await Project.findById(idProject)
    const { progressTotal } = project

    const operation = await operationType(progress, idReport)

    let newProgressTotal = Number(progressTotal)

    if (operation === 'add' || !idReport) {
      newProgressTotal += Number(progress)
    }

    if (operation === 'substract') {
      newProgressTotal -= Number(progress)
    }

    console.log(newProgressTotal)

    if (newProgressTotal > 100) {
      return 'Error progress of project cannot be greater than 100'
    }

    await Project.findByIdAndUpdate(idProject, { progressTotal: newProgressTotal })
    return 'Success'
  } catch (_) {
    return 'Error summing progress'
  }
}

const reportIsEditable = async (idReport) => {
  try {
    const report = await Report.findById(idReport)
    const { timesEdited } = report
    const isSomeuser = true
    const numberThisWeek = getISOWeek(new Date())
    const numberReportWeek = getISOWeek(report.createdAt)

    return isSomeuser && timesEdited < 2 && numberThisWeek === numberReportWeek
  } catch (_) {
    return false
  }
}

export const getReportById = async (req, res) => {
  const { id } = req.params
  const report = await Report.findById(id).populate('by', '-_id -password -role -createdAt')
  response(
    200,
    'Success',
    {
      ...report._doc,
      isEditable: await reportIsEditable(id),
    },
    res
  )
}

export const createReport = async (req, res) => {
  const { by, project, title, report, progress, state } = req.body
  const reportData = {
    by,
    title,
    report,
    progress,
    state,
    timesEdited: 0,
  }
  const newReport = new Report(reportData)

  const idProject = await addReportToProject(newReport._id, project)
  if (!idProject) {
    return response(400, 'Error', 'Error creating report, not found project', res)
  }

  const progressTotalMessage = await sumToProgressTotal(project, progress, null)
  if (progressTotalMessage.includes('Error')) {
    return response(400, 'Error', progressTotalMessage, res)
  }

  await newReport.save()
  return response(200, 'Success', newReport, res)
}

export const updateReport = async (req, res) => {
  const { id } = req.params
  const { title, report, progress, state, project } = req.body
  const reportData = {
    title,
    report,
    progress,
    state,
  }

  const isEditable = await reportIsEditable(id)

  if (!isEditable) {
    return response(400, 'Error', 'You are not allowed to edit this report', res)
  }

  const progressTotalMessage = await sumToProgressTotal(project, progress, id)
  if (progressTotalMessage.includes('Error')) {
    return response(400, 'Error', progressTotalMessage, res)
  }

  const updatedReport = await Report.findByIdAndUpdate(
    id,
    {
      ...reportData,
      $inc: { timesEdited: 1 },
    },
    { new: true }
  )
  return response(200, 'Success', updatedReport, res)
}
