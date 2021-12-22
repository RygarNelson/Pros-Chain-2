'use strict'

const express = require('express')

const router = express.Router()

const authMethods = require('../methods/authMethods')

const standardCallback = require('../methods/standardCallback')
const { connection } = require('../db')

router.post('/login', async (req, res) => {
    
})

router.post('/register', async (req, res) => {
    
})

router.post('/password', async (req, res) => {
    
})

router.post('/checkToken', async (req, res) => {
    if (authMethods.checkToken(req.body.token)) {
        res.send({
            success: true,
            data: "Valid token"
        })
    } else {
        res.send({
            success: false,
            error: "Not a valid token"
        })
    }
})

module.exports = router
