const mongoose = require('mongoose')

const agencySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    usedCars: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UsedCar'
    }]
})

module.exports = mongoose.model('Agency', agencySchema)