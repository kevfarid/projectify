import Mongoose from 'mongoose'

const reportSchema = new Mongoose.Schema(
  {
    by: {
      type: Mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    title: {
      type: String,
      required: true,
      minlength: 3,
    },
    report: {
      type: String,
      required: true,
      minlength: 3,
    },
    progress: {
      type: Number,
      min: 0,
      max: 100,
      required: true,
    },
    timesEdited: {
      type: Number,
    },
    state: {
      type: String,
      required: true,
      default: 'pending',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

export default Mongoose.model('Report', reportSchema)
