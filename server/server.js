import config from './../config/config'
import app from './express'
import mongoose from 'mongoose'
import fs from 'fs'
import https from 'https'
var privateKey 
var certificate 
// Connection URL
mongoose.Promise = global.Promise
mongoose.connect(config.mongoUri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${config.mongoUri}`)
})

//Old server start
/*
https.createServer ({
  key: privateKey,
  cert: certificate
},app).listen(config.port, (err) => {
  if (err) {
    console.log(err)
  }
  console.info('Server started on port %s.', config.port)
})
*/

// ssl cert info
var options = {
  key: fs.readFileSync( '/etc/letsencrypt/live/testfrontiertech.com/privkey.pem'),
  cert: fs.readFileSync( '/etc/letsencrypt/live/testfrontiertech.com/cert.pem')
};
// https server
https.createServer(options, function (req, res) {
},app).listen(443);

// Redirect from http port 80 to https
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(301, { "Location": "https://" + req.headers['host'] + req.url });
  res.end();
}).listen(80);