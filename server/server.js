import config from './../config/config'
import app from './express'
import mongoose from 'mongoose'
import fs from 'fs'
import https from 'https'
import http from 'http'


// Connection URL
mongoose.Promise = global.Promise
mongoose.connect(config.mongoUri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${config.mongoUri}`)
})

if(config.env === "development"){
  app.listen(3069, (err) => {
    if (err) {
      console.log(err)
    }
    console.info('Server started on port %s.', 3069)
  })
}

if(config.env === "production"){
  var privateKey = fs.readFileSync( '/etc/letsencrypt/live/testfrontiertech.com/privkey.pem')
  var certificate = fs.readFileSync( '/etc/letsencrypt/live/testfrontiertech.com/cert.pem')
  https.createServer ({
    key: privateKey,
    cert: certificate
  },app).listen(443, (err) => {
    if (err) {
      console.log(err)
    }
    console.info('Server started on port %s.', 443)
  })
  
  //http redirect
  http.createServer(function (req, res) {
    res.writeHead(301, { "Location": "https://" + req.headers['host'] + req.url });
    res.end();
  }).listen(80);
}