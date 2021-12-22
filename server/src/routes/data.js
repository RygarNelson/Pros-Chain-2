'use strict'

const express = require('express')

const router = express.Router()

const { authenticate } = require('../middleware/authenticate')

/* Authentication middleware */
router.use(authenticate)

module.exports = router