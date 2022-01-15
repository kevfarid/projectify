import mongoose from 'mongoose'
import config from 'config'

mongoose.connect(config.get('database.uri')).then(() => {
  console.log('Connected to database')
})
