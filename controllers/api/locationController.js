const express = require('express');
const router = express.Router();
const {Location,Traveller,Trip} = require('../../models');
const bcrypt = require("bcrypt");

router.get("/",(req,res)=>{
    //It's done when the GET route /api/locations returns all location data in Insomnia Core.
    Location.findAll({
    }).then(Locations=>{
        if(Locations.length){
            res.json(Locations)
        } else {
            res.status(404).json({message:"No Locations found!"})
        }
    }).catch(err=>{
        res.status(500).json({message:"Error:",err:err})
    })
});

router.post("/",(req,res)=>{
    //It's done when the POST route /api/locations creates location data and returns a successful response in Insomnia Core.
    Location.create({
        name:req.body.name,
    }).then(newLocation=>{
        res.json(newLocation);
    }).catch(err=>{
        res.status(500).json({message:"Error:",err:err})
    })
});

router.get("/:id",(req,res)=>{
    // It's done when the GET route /api/locations/:id returns a single location's data, with its associated trips, in Insomnia Core.
    Location.findOne({
        where:{
            id:req.body.id
        },
        // include:[Trip,Location] Include?????
    }).then(foundLocation=>{
        if(!foundLocation){
            res.status(401).json({message:"Location not found"})
        } else {
            // Currently just returning the Location.. not joined
            res.json(foundLocation)
        }
    }).catch(err=>{
         console.log(err);
        res.status(500).json(err);
    })
});

router.delete("/:id",(req,res)=>{
    // It's done when the DELETE route /api/locations/:id removes a location and any trips associated with it and returns a successful response in Insomnia Core.
    Location.destroy({
        where:{
            id:req.params.id
        }
    }).then(delLocation=>{
        res.json(delLocation)
    })
});