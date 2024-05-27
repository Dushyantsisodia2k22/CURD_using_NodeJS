const express = require("express")
const router = express.Router()
const Item = require("../Models/Item")

router.post("/", async (req, res) => {
    try {
        const data = req.body
        const itemData = new Item(data)
        const response = await itemData.save()
        console.log("Menu Data saved in Databased")
        res.status(200).json(response)
    }
    catch (error) {
        console.log("Error saving menu data", error.message)
        res.status(500).json({ Message: "Internal server error" })
    }

})

router.get("/", async (req, res) => {
    try {
        const data = await Item.find()
        console.log("Menu Data fetched ")
        res.status(200).json(data)

    } catch (error) {
        console.log("Unable to fetch Menu Data :", error.message)
        res.status(500).json({ message: "Internal server error" })
    }
})

router.put("/:id",async (req,res) =>{
    try {
        const itemId = req.params.id
        const updateItem = req.body
        const response = await Item.findByIdAndUpdate(itemId,updateItem,{
            new: true,
            runValidators: true
        })

        if(!response){
            res.status(404).json({message: "No item found"})
            console.log("No item found")
        }
        console.log("Item Upadated")
        res.status(200).json(response)         
    } catch (error) {
        console.log("Error occured while saving the data:")
        res.status(500).json({message: "Internal server error"})
    }
})

router.delete("/", async (req, res) => {
    try {
        const itemId = req.params.id
        const response = Item.findByIdAndUpdate(itemId)
        console.log("Menu Item deleted")
        res.status(200).json({message: "Menu item deleted"})
    } catch (error) {
        console.log("Error in Deleting the data ")
        res.status(500).json({message: "Internal server error"})
    }

})

module.exports = router