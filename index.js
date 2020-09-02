const express = require('express')
const app = express()

// FOR DATA MIDDLEWARE
//Allows from Data to be processed into Req.body
app.use(express.urlencoded({extended: false}))
//tells express to recognize req.body as a json
app.use(express.json())

//include the usedCars controller
app.use('/usedCars', require('./controllers/usedCars'))

app.get('/', (req, res)=> {
    res.send('USED CARS You have hit the home route')
})
app.listen(8000, ()=> {
console.log("USED CARS MongoDB yeeeessssss!")
})