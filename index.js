const express = require("express")
require("dotenv").config()
const bodyParser = require("body-parser")

const personRouter = require("./Routes/personRoute")
const menuRouter = require("./Routes/menuRoute")
const DB = require("./Database/DB")

const app = express()
const PORT = process.env.PORT

app.use(bodyParser.json())
app.use("/person",personRouter)
app.use("/menu",menuRouter)

app.get("/",(req,res)=>{
    res.send("Hello Welcome to our website")
})

app.listen(PORT,()=>{
    DB()
    console.log(`Server running on the PORT :${PORT}`)
})