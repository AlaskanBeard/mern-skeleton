import config from './../config/config'
import app from './express'
import mongoose from 'mongoose'
import fs from 'fs'
import https from 'https'
var privateKey = fs.readFileSync( '/etc/letsencrypt/live/testfrontiertech.com/privkey.pem')
var certificate = fs.readFileSync( '/etc/letsencrypt/live/testfrontiertech.com/cert.pem')

// Connection URL
mongoose.Promise = global.Promise
mongoose.connect(config.mongoUri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${config.mongoUri}`)
})
https.createServer ({
  key: privateKey,
  cert: certificate
},app).listen(config.port, (err) => {
  if (err) {
    console.log(err)
  }
  console.info('Server started on port %s.', config.port)
})
