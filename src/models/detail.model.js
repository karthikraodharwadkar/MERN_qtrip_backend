const mongoose=require("mongoose");

const detailSchema = new mongoose.Schema({
    id: {type:String,required:true,trim:true},
    name: {type:String,required:true,trim:true},
    subtitle: {type:String,required:true,trim:true},
    images: [{type:String,required:true,trim:true}],
    content: {type:String,required:true,trim:true},
    available: {type:String,required:true,trim:true},
    reserved: {type:Boolean,required:true,trim:true},
    costPerHead: {type:Number,required:true,trim:true}
})

const DetailModel = mongoose.model("AdventureDetail",detailSchema)

module.exports = DetailModel;