const mongoose = require("mongoose")
const { MongoURI } = require("./key")

const connectDB = async () => {
    const connection = await mongoose.connect(MongoURI)

    console.log(`mongoDB connected: ${connection.connection.host}`)
}

module.exports = connectDB