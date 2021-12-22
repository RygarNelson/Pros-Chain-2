'use strict'

const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')
const fs = require('fs')
var rfs = require('rotating-file-stream')
var path = require('path')

/* SERVER & PARAMETERS */
const app = express()

/* SECURITY */
app.use(helmet())

/* LOGGING */
// Create a rotating write stream
var accessLogStream = rfs.createStream('access.log', {
    interval: '1d', // rotate daily
    path: path.join(__dirname, 'log')
})
app.use(morgan('combined', {
    stream: accessLogStream
}))
app.use(morgan('combined'))

/* CORS */
app.use(cors())
app.use(function allowCrossDomain(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, PATCH, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    if ('OPTIONS' === req.method)
        res.sendStatus(200);
    else
        next();
});

/* MISCELLANEOUS */
app.use(express.json({limit: '10000kb'}))
app.use(express.urlencoded({'extended': true}))

/* ROUTES */
const sampleRoute = require("./routes/sample")
const authRoute = require("./routes/auth")
const dataRoute = require("./routes/data")

// Routers
// Sample API
app.use('/api/sample', sampleRoute)
// Auth API
app.use('/api/auth', authRoute)
// Data API
app.use('/api/data', dataRoute)

module.exports = {app}
