import joi from 'joi'

const reportSchema = joi.object({
  by: joi.string().required(),
  project: joi.string(),
  title: joi.string().required(),
  report: joi.string().required(),
  progress: joi.number().min(0).max(100).required(),
  timesEdited: joi.number().default(0),
  state: joi.string().required().default('pending'),
})

const validate = (report) => {
  return reportSchema.validate(report)
}

export default validate
