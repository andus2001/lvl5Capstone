const mongoose = require('mongoose')
const Schema = mongoose.Schema

//blueprint
const credentialsSchema = new Schema({
    subscription: { type: String, required: true},
    userName: {type: String, required: true},
    password: {type: String, required: true}
})

module.exports = mongoose.model("Credentials", credentialsSchema)