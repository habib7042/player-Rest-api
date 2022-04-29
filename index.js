const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const BodyParser = require('body-parser')
const router = require('./routers/api')
const app = express()
//MongoDB connection
mongoose.connect(process.env.DB_URL)
//BodyParser
app.use(BodyParser.json())
//Router
app.use('/api', router)
//Error Handler
app.use(function (err, req, res, next) {
    console.log(err);
})

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running');
})