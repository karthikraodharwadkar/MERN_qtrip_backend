const mongoose = require("mongoose");

const nestedAdventureSchema = new mongoose.Schema({
    id:{type:String,trim:true,required:true},
    name:{type:String,trim:true,required:true},
    costPerHead:{type:Number,trim:true,required:true},
    currency:{type:String,trim:true,required:true},
    image:{type:String,trim:true,required:true},
    duration:{type:Number,trim:true,required:true},
    category:{type:String,trim:true,required:true}
})

const adventureSchema = new mongoose.Schema({
    id: { type: String, required: true, trim: true},
    adventures:[nestedAdventureSchema]
})

const AdvenutureModel = mongoose.model("Adventures",adventureSchema)

module.exports = AdvenutureModel