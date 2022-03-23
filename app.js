require('dotenv').config()
const express = require('express'),
      morgan = require('morgan'),
      Router = require('./routes/routes')
      cors = require('cors')

require('./config/database')

const app = express()

// Settings

app.set('port',process.env.PORT || 4000)

// Middleware

app.use(morgan('dev'))
   .use(cors())
   .use(express.json())
   .use('/api',Router)


module.exports = app