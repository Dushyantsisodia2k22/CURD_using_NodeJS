const express = require("express");
const router = express.Router();
const Person = require("../Models/Person");

router.post("/", async (req, res) => {
    try {
        const data = req.body;
        console.log("Received data:", data);
        const newPerson = new Person(data);
        const response = await newPerson.save();
        console.log("Data Saved:", response);
        res.status(200).json(response);
    } catch (error) {
        console.error("Error occured while saving the data:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.get("/", async (req, res) => {
    try {
        const data = await Person.find();
        console.log("Data Fetched:", data);
        res.status(200).json(data);
    } catch (error) {
        console.error("Error fetching data:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.put("/:id",async(req,res)=>{
    try {
        const personId = req.params.id
        const updatePerson = req.body
        const response = await Person.findByIdAndUpdate(personId,updatePerson,{
            new: true,
            runValidators: true
        })

        if(!response){
            res.status(404).json({message: "No user found"})
            console.log("No user found")
        }
        console.log("User Upadated")
        res.status(200).json(response)
        
    } catch (error) {
        console.log("Error occured while updating",error.message)
        res.status(500).json({message: "Internal server error"})
    }
})

router.delete("/:id",async(req,res)=>{
    try {
        const personId = req.params.id
        const response = await Person.findByIdAndDelete(personId)

        if(!response){
            console.log("user not found")
            res.status(404).json({message: "user not found"})
        }
        else{
            console.log("user is deleted")
            res.status(200).json({message: "user is deleted"})
        }
        
    } catch (error) {
        console.error("Error in Deleting the data ",error.message)
        res.status(200).json({message: "Internal server error"})
    }
})


module.exports = router;
