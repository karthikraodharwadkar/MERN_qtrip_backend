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
    console.log("connected to MongoDB")
    app.listen(process.env.NODE_ENV,()=>{
        console.log(`listening at ${process.env.NODE_ENV}`)
    })
}).catch((error)=>{
    console.log(error)
})

app.use("/cities",routes)
