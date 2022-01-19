import joi from 'joi'

const projectSchema = joi.object({
  name: joi.string().required(),
  reports: joi.array().items(joi.string()),
  start: joi.date().required(),
  end: joi.date().required(),
  progressTotal: joi.number().max(100).default(0),
})

const validate = (project) => {
  return projectSchema.validate(project)
}

export default validate
