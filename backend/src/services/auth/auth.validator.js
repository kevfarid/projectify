import joi from 'joi'

const registerSchema = joi.object({
  name: joi.string().required(),
  password: joi.string().required(),
  role: joi.string().required(),
  urlImg: joi.string(),
})

export const validateRegister = (user) => {
  return registerSchema.validate(user)
}
