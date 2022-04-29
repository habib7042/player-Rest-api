const mongoose = require('mongoose')
const { required } = require('nodemon/lib/config')
const Schema = mongoose.Schema

const GeoSchema = new Schema({
    type: {
        type: String,
        default: "Point"
    },
    coordinates: {
        type: [Number],
        index: "2dsphere"
    }
})
const PlayerSchema = new Schema({
    name: {
        type: String,
        required: [true, "Must enter your name"]
    },
    role: {
        type: String,
        required: [true, "Must enter a role"]
    },
    online: {
        type: Boolean,
        default: true,
        required: true
    },
    location: GeoSchema
})

const Player = mongoose.model('player', PlayerSchema)

module.exports = Player