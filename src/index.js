require("dotenv").config()
const express = require("express");
var cors = require('cors')
const app= express();
app.use(express.json())
const mongoose = require("mongoose");
const routes = require("./Routes/route")

const DB_URI = "mongodb+srv://admin:pa55word@cluster0.i9okk5n.mongodb.net/qtrip?retryWrites=true&w=majority"

app.use(cors())

//const DB_URI = "mongodb://127.0.0.1:27017/qtrip"
mongoose.connect(DB_URI).then(()=>{
    console.log("connected to mongoDB")
}).catch((error)=>{
    console.log(error)
})

app.listen(process.env.PORT,()=>{
    console.log("Listening...")
})

app.use("/cities",routes)
