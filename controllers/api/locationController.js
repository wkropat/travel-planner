const express = require('express');
const router = express.Router();
const {Location,Traveller,Trip} = require('../../models');
const bcrypt = require("bcrypt");

router.get("/",(req,res)=>{
    //It's done when the GET route /api/locations returns all location data in Insomnia Core.
});

router.post("/",(req,res)=>{
    //It's done when the POST route /api/locations creates location data and returns a successful response in Insomnia Core.
});

router.get("/:id",(req,res)=>{
    // It's done when the GET route /api/locations/:id returns a single location's data, with its associated trips, in Insomnia Core.
});

router.delete("/:id",(req,res)=>{
    // It's done when the DELETE route /api/locations/:id removes a location and any trips associated with it and returns a successful response in Insomnia Core.
});