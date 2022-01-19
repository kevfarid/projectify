import Project from './project.model'
import { response } from '../../helpers/responses'
import validate from './project.validator'

export const getProjects = async (req, res) => {
  const projects = await Project.find().populate('reports')
  return response(200, 'Projects retrieved', projects, res)
}

export const getProjectById = async (req, res) => {
  const { id } = req.params
  const project = await Project.findById(id).populate({
    path: 'reports',
    select: '-updatedAt -report',
    populate: {
      path: 'by',
      select: '-_id -password -role -updatedAt',
      model: 'User',
    },
  })
  return response(200, 'Project retrieved', project, res)
}

export const createProject = async (req, res) => {
  const { error } = validate(req.body)
  if (error) {
    return response(400, error.details[0].message, null, res)
  }

  const { name, start, reports, progressTotal, end } = req.body
  const project = new Project({ name, start, reports, progressTotal, end })

  const projectSaved = await project.save()
  return response(200, 'Project created', projectSaved, res)
}

export const updateProject = async (req, res) => {
  const { error } = validate(req.body)
  if (error) {
    return response(400, error.details[0].message, null, res)
  }

  const { id } = req.params
  const { name, start, reports, end } = req.body

  const project = await Project.findByIdAndUpdate(id, { name, start, reports, end })
  return response(200, 'Project updated', project, res)
}
