const mongoose = require('mongoose')
const Schema = mongoose.Schema

//blueprint
const userProfileSchema = new Schema({
 userName: { type: String },
 password: { type: String},
 firstName: { type: String},
 lastName: {type: String}   
})

module.exports = mongoose.model("UserProfile", userProfileSchema)