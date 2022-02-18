const mongoose = require('mongoose')
const Schema = mongoose.Schema

//blueprint
const userProfileSchema = new Schema({
 userName: { type: String, required: true },
 password: { type: String, required: true},
 firstName: { type: String, required: true},
 lastName: {type: String, required: true}   
})

module.exports = mongoose.model("UserProfile", userProfileSchema)