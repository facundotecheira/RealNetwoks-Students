require('dotenv').config()
const express = require('express'),
   morgan = require('morgan'),
   Router = require('./routes/routes')
cors = require('cors')
path = require('path')

require('./config/database')

const app = express()

// Settings

app.set('port', process.env.PORT || 4000)

// Middleware

app.use(morgan('dev'))
   .use(cors())
   .use(express.json())
   .use('/api', Router)


if (process.env.NODE_ENV === 'production') {
   app.use(express.static("client/build"))
   app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname + "/client/build/index.html"))
   })
}

module.exports = app