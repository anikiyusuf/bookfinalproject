const mongoose = require("mongoose")

const Schema = mongoose.Schema 

const BookSchema = new Schema({
    title:{
        type:String,
        require:true,
    },
    shortDescription:{
        type:String,
        require:true
    },
    longDescription:{
        type:String,
        require:true
    },
    year:{
        type:String,
        require:true,
        max:[2022, 'Year must be less than or equal to 2020']
    },
    isbn:{
        type:String,
        require:true,
        unique:[true, 'ISBN must be unique']
    },
    price:{
        type:Number, 
        require:true,
        min:[0, 'Price must be greater than or equal to 0']
    },
    createAt : {
        type:Date,
        default:Date.now
    },
    lastUpdateAt :{
        type:String,
        default:Date.now 
    }
})

module.exports = mongoose.model("Books" , BookSchema)