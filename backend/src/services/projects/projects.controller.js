import Project from './project.model'
import { response } from '../../helpers/responses'

export const getProjects = async (req, res) => {
  const projects = await Project.find().populate('reports')
  return response(200, 'Projects retrieved', projects, res)
}

export const getProjectsById = async (req, res) => {
  const { id } = req.params
  const project = await Project.findById(id).populate({
    path: 'reports',
    select: '-_id -updatedAt -report',
    populate: {
      path: 'by',
      select: '-_id -password -role -updatedAt',
      model: 'User',
    },
  })
  return response(200, 'Project retrieved', project, res)
}

export const createProject = async (req, res) => {
  const { name, start, reports, end } = req.body
  const project = new Project({ name, start, reports, end })
  const projectSaved = await project.save()
  return response(200, 'Project created', projectSaved, res)
}

export const setProject = async (req, res) => {
  const { id } = req.params
  const { name, start, reports, end } = req.body
  const project = await Project.findByIdAndUpdate(id, { name, start, reports, end })
  return response(200, 'Project updated', project, res)
}
