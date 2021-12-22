'use strict'

const express = require('express')

const router = express.Router()

router.get('/', async (req, res) => {
    res.status(200).send({
        success: true,
        data: "Connection with server established successfully"
    })
})

module.exports = router
