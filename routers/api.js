const express = require('express')
const router = express.Router()
const Player = require('../models/playerData')


router.get('/players', (req, res, next) => {
    const option = {
        location: {
            $geoWithin: {
                $centerSphere: [[parseFloat(req.query.lng), parseFloat(req.query.lat)], 15 / 3963.2]
            }
        }
    }
    Player.find(option).then(function (result) {
        res.send(result)
    })
})
router.post('/players', (req, res, next) => {
    Player.create(req.body).then(function (result) {
        res.send(result)
    }).catch(next)
})
router.put('/players/:id', (req, res, next) => {
    Player.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function () {
        Player.findById({ _id: req.params.id }).then(function (result) {
            res.send(result)
        }
        )
    })
})
router.delete('/players/:id', (req, res) => {
    Player.findByIdAndRemove({ _id: req.params.id }).then(function (result) {
        res.send(result)
    })
})


module.exports = router