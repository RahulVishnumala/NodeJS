const express = require('express');
const app = express();
const db  = require("./db");

const task = require('./models/task');

// parse incoming requests data
const bodyParser = require('body-parser')
app.use(bodyParser.json())

app.post('task',async (req,res)=>{
    try{
        const newTask = new task(req.body);
        const savedTask = await newTask.save();
        console.log('Data saved successfully');
        res.status(200).json(savedTask);
    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'})
    }
})

app.get('/task',async (req,res)=>{
    try{
        const getTask = await task.find();
        res.status(200).json(getTask);
    }catch(err){
        console.log(err);
        res.status(500).json({error:"Error in Fetching Data"});
    }
})

const PORT = 3000
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})