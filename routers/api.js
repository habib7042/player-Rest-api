const express = require('express')
const router = express.Router()


router.get('/players', (req, res, next) => {
    res.send("Get")
})
router.post('/players', (req, res, next) => {
    res.send("Get")
})
router.put('/players', (req, res, next) => {
    res.send("Get")
})
router.delete('/players', (req, res) => {
    res.send("Get")
})


module.exports = router