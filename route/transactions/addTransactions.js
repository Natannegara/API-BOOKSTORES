const express = require('express')
const app = express.Router()
const db = require('../../controller/dbController')

app.post('/transactions', (req, res) => {
    const body = req.body
    const result = db.add('transactions', body)
    res.send(result)
    return
})


module.exports = app
