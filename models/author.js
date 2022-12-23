const mongoose = require("mongoose")

const Schema =  mongoose.Schema;

const AuthorSchema = new Schema({
    firstName:{
       type:String,
       required:true
    },
    lastName:{
        type:String,
        required:true
    },
    dob:{
        type:Date
    },
    country:{
        type:String,
        required: true
     },
     book:{
        type:Array,
        default:[]
     },
     createAt:{
        type:Date,
        default:Date.now
     },
     lastUpdateAt: {
        type:Date,
        default:Date.now
     }
})

module.exports = mongoose.model("Authors", AuthorSchema)