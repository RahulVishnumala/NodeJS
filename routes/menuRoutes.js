const express = require('express');
const router = express.Router();

const menu = require('./../models/menu');

router.post('/',async (req,res)=>{
    try{
        const data = req.body;
        const newMenu = new menu(data);
        const savedMenu = await newMenu.save();
        console.log('Data saved successfully');
        res.status(200).send(savedMenu)

    }catch(err){
        console.log(err);
        res.status(500).send({error:'Internal Server Error'});
    }
})

router.get('/',async (req,res)=>{
    try{
        const getMenu = await menu.find();
        res.status(200).send(getMenu);

    }catch(err){
        console.log(err);
        res.status(500).send({error: 'Error in Fetching Data'});
    }
})

router.get('/:menuname', async (req,res)=>{
    try{
        const menuname = req.params.menuname;
        if(menuname == 'North Indian Thali' || menuname == 'South Indian Thali'){
            const response = await menu.find({name: menuname})
            console.log('Response fetched');
            res.status(200).json(response);
        }else{
            res.status(400).send("Invalid Menu Name");
        }
    }catch(err){
        console.log(err);
        res.status(500).json({error:"Internal server error"});
    }
})

module.exports = router;