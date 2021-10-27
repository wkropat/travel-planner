const express = require('express');
const router = express.Router();
const {Location,Traveller,Trip} = require('../../models');
const bcrypt = require("bcrypt");


router.get("/",(req,res)=>{
    //It's done when the GET route /api/travellers returns all traveller data WITHOUT associated trips in Insomnia Core.
    Traveller.findAll({
    }).then(Travellers=>{
        if(Travellers.length){
            res.json(Travellers)
        } else {
            res.status(404).json({message:"No travellers found!"})
        }
    }).catch(err=>{
        res.status(500).json({message:"Error:",err:err})
    })
});

router.post("/",(req,res)=>{
    //It's done when the POST route /api/travellers creates traveller data and returns a successful response in Insomnia Core.
    Traveller.create({
        name:req.body.name,
        email:req.body.email
    }).then(newTraveller=>{
        res.json(newTraveller);
    }).catch(err=>{
        res.status(500).json({message:"Error:",err:err})
    })
});

router.get("/:id",(req,res)=>{
    // It's done when the GET route /api/travellers/:id returns a single traveller's data WITH their associated trips and a list of locations in Insomnia Core.
    Traveller.findOne({
        where:{
            id:req.body.id
        },
        // include:[Trip,Location] Include?????
    }).then(foundTraveller=>{
        if(!foundTraveller){
            res.status(401).json({message:"Traveller not found"})
        } else {
            // Currently just returning the traveller.. not joined
            res.json(foundTraveller)
        }
    }).catch(err=>{
         console.log(err);
        res.status(500).json(err);
    })
});

router.delete("/:id",(req,res)=>{
    // It's done when the DELETE route /api/travellers/:id removes a traveller and any trips associated with them and returns a successful response in Insomnia Core.
    Traveller.destroy({
        where:{
            id:req.params.id
        }
    }).then(delTraveller=>{
        res.json(delTraveller)
    })
});

module.exports = router;