const express = require('express');
const router = express.Router();
const {Location,Traveller,Trip} = require('../../models');
const bcrypt = require("bcrypt");


router.get("/",(req,res)=>{
    //It's done when the GET route /api/travellers returns all traveller data without associated trips in Insomnia Core.
});

router.post("/",(req,res)=>{
    //It's done when the POST route /api/travellers creates traveller data and returns a successful response in Insomnia Core.
});

router.get("/:id",(req,res)=>{
    // It's done when the GET route /api/travellers/:id returns a single traveller's data with their associated trips and a list of locations in Insomnia Core.
});

router.delete("/:id",(req,res)=>{
    // It's done when the DELETE route /api/travellers/:id removes a traveller and any trips associated with them and returns a successful response in Insomnia Core.
});