const express = require('express');
const router = express.Router();
const {Location,Traveller,Trip} = require('../../models');
const bcrypt = require("bcrypt");

router.post("/",(req,res)=>{
    //It's done when the POST route /api/trips creates trip data between associated travellers and locations.
    
});


router.delete("/:id",(req,res)=>{
    // It's done when the DELETE route /api/trips/:id removes a trip and returns a successful response in Insomnia Core.


});