//set up mongoose connection
const mongoose = require('mongoose')

//mongo connection string
//this will auto create the db if it doesn't already exist
mongoose.connect('mongodb://localhost/usedCars', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
})

//shortcut to mongoose.connection object
const db = mongoose.connection

// set up an event listener to fire once connection opens
//to concole.log what host and port it is running on
db.once('open', ()=>{
    console.log(`Connected MongoDb at ${db.host}:${db.port}`)
})

// set up an event listener to fire on database error and console.log
// the error object
db.on('error', (err)=>{
    console.log(`Database error:\n${err}`)
})

// Export all the things
module.exports.UsedCar = require('./usedCar')