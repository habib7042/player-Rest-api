const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const BodyParser = require('body-parser')
const router = require('./routers/api')
const app = express()
//MongoDB connection
mongoose.connect(process.env.DB_URL)
//
app.use(express.static('public'))
//BodyParser
app.use(BodyParser.json())
//Router
app.use('/api', router)
//Error Handler
app.use(function (err, req, res, next) {
    res.send({ error: err._message })
})

app.listen(process.env.port || 3000, () => {
    console.log('Server is running');
})