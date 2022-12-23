
require("dotenv").config()
const mongoose = require("mongoose")
const logger = require("./logger/logger")

const MONGODB_URL = process.env.MONGODB_URL

function  connectionMongoDB(){
    mongoose.connect(MONGODB_URL)

    mongoose.connection.on("connected", () =>{
        logger.info("connection to mongodb successful")
    })

    mongoose.connection.on("err", (err) =>{
        logger.error(err)
        
    })

}

module.exports =   {connectionMongoDB}