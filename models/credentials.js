const mongoose = require('mongoose')
const Schema = mongoose.Schema

//blueprint
const credentialsSchema = new Schema({
    subscription: { type: String},
    userName: {type: String},
    password: {type: String}
})

module.exports = mongoose.model("Credentials", credentialsSchema)