const express = require("express")
const router = express.Router()
const Item = require("../Models/Item")

router.post("/",async(req,res)=>{
    try{
        const data = req.body
        const itemData = new Item(data)
        const response = await itemData.save()
        console.log("Menu Data saved in Databased")
        res.status(200).json(response) 
    }
    catch(error){
        console.log("Error saving menu data",error.message)
        res.status(500).json({Message:"Internal server error"})
    }
   
})

router.get("/",async(req,res)=>{
    try {
        const data = await Item.find()
        console.log("Menu Data fetched ")
        res.status(200).json(data)
        
    } catch (error) {
        console.log("Unable to fetch Menu Data :",error.message)
        res.status(500).json({message: "Internal server error"})
    }
})

module.exports = router