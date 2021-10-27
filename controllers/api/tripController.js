const express = require('express');
const router = express.Router();
const {Location,Traveller,Trip} = require('../../models');
const bcrypt = require("bcrypt");

router.post("/",(req,res)=>{
    //It's done when the POST route /api/trips creates trip data between associated travellers and locations.
    Trip.create({
        trip_budget:req.body.trip_budget,
        traveller_amount:req.body.traveller_amount
    }).then(newTrip=>{
        res.json(newTrip);
    }).catch(err=>{
        res.status(500).json({message:"Error:",err:err})
    })

});


router.delete("/:id",(req,res)=>{
    // It's done when the DELETE route /api/trips/:id removes a trip and returns a successful response in Insomnia Core.
    Trip.destroy({
        where:{
            id:req.params.id
        }
    }).then(delTrip=>{
        res.json(delTrip)
    })
});