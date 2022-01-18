import mongoose from 'mongoose'

const projectSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlenght: 3,
    },
    reports: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Report',
        required: false,
      },
    ],
    start: {
      type: Date,
      required: true,
    },
    end: {
      type: Date,
      required: true,
    },
    progressTotal: {
      type: Number,
      max: 100,
      default: 0,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

export default mongoose.model('Project', projectSchema)
