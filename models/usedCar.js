//import mongoose
const mongoose = require('mongoose')

//let seller Schema
let sellerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 66
    },
    meta: {
        contact: Number,
        email: String,
        address: String
    }
})

//Create used-car schema
let usedCarSchema = new mongoose.Schema({
    brandName: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 100
    },
    year: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    sellers: [sellerSchema],
    captured: {
        type: Boolean,
        default: false
    }

})

// export the model
module.exports = mongoose.model('UsedCar', usedCarSchema)