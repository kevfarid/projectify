import express from 'express'
import config from 'config'
import logger from 'morgan'
import cors from 'cors'

import { name } from '../package.json'
import allRoutes from './routes'

const app = express()

app.use(cors())

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(logger(config.get('server.logger')))

app.get('/', (_, res) => {
  res.status(200).json({
    status: 'OK 200',
    message: name,
  })
})

app.use('/api', allRoutes)

app.set('port', config.get('server.port'))

export default app
