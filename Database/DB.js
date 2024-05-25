const mongoose = require("mongoose")
require("dotenv").config

const DB_URL = process.env.DB_URL

const DB = async()=>{
    try {
        await mongoose.connect(DB_URL)
        console.log("Coonected With Database")
    } catch (error) {
        console.log("Error while contecting with Database")
    }
}

module.exports = DB