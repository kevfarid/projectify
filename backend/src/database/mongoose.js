/**
 * install mongoose 'npm install mongoose --save'
 */
import mongoose from 'mongoose'
import config from 'config'

const uri = `mongodb://${config.get('database.host')}/${config.get('database.name')}`

mongoose.connect(config.get('database.uri') || uri)
