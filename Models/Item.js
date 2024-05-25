const mongoose = require("mongoose")

const itemSchema = new mongoose.Schema({
    itemType:{
        type: String,
        enum: ["veg","non-veg","shake"],
        require: true
    },

    itemName: {
        type: String,
        require: true
    },

    price: {
        type: Number,
        require: true
    }
})

const Item = mongoose.model("Item List",itemSchema)

module.exports = Item