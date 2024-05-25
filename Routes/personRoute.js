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
        console.error("Error saving data:", error.message);
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

module.exports = router;
