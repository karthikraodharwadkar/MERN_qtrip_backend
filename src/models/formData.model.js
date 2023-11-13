const mongoose = require("mongoose");

const formDataSchema = new mongoose.Schema({
    name:{type:String,required:true,trim:true,unique:true},
    date:{type:Date,required:true,trim:true},
    personcount:{type:String,required:true,trim:true},
    adventure:{type:String,trim:true,required:true},
    priceperhead:{type:Number,trim:true,required:true},
    adventureId:{type:String,trim:true,required:true}
},{
    timestamps:true
})

const FormDataModel = mongoose.model("UserData",formDataSchema)

module.exports = FormDataModel