import mongoose from 'mongoose'

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlenght: 3,
      maxlenght: 50,
    },
    password: {
      type: String,
      required: true,
      minlenght: 8,
    },
    email: {
      type: String,
      required: true,
      minlenght: 5,
      maxlenght: 100,
    },
    role: {
      type: String,
      required: true,
      minlenght: 2,
      maxlenght: 20,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

export default mongoose.model('User', userSchema)
