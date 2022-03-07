const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const connectDB = require ('./db-atlas/database.js')


//middleware
app.use(express.json())
app.use(morgan('dev'))

//database connection
// mongoose.connect("mongodb+srv://andus2001:andus2001@password.2kmjs.mongodb.net/password",
// () => console.log(`connected to DB`))

connectDB()

//routes
app.use('/userProfile', require('./routes/userProfileRouter.js'))
app.use('/credentials', require('./routes/credentialsRouter.js'))

//error handler
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(9000, () => {
    console.log(`running on port 9000...for your convienence`);
})