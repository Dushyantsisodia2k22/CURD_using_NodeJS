const mongoose = require("mongoose")

const personSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },

    designation:{
        type: String,
        enum: ["manager","chef","waiter"],
        require: true
    },

    phoneNumber:{
        type: Number,
        require: true
    },

    email:{
        type: String,
        require: true,
        unique: true
    },

    salary: {
        type: Number,
        require: true,
        
    }


})

const Person = mongoose.model("Staff Details",personSchema)

module.exports = Person