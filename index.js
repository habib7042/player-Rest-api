const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const router = require('./routers/api')
const app = express()

//Router
app.use('/api', router)
//Mongodb Connection
mongoose.connect(process.env.DB_URL)

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running');
})