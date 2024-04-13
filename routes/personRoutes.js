const express = require('express');
const router = express.Router();

const person = require('./../models/person');
// POST route to add person
router.post('/',async (req,res)=>{
    try{
        const data = req.body; // Assuming the request body contains the person data
        // Create a new Person document using the Mongoose Model
        const newPerson = new person(data);
        // Save the new person to the database
        const savedPerson = await newPerson.save();
        console.log('data saved');
        res.status(200).json(savedPerson);
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal server error'});
    }
})

// GET router to get the data saved in the DB
router.get('/',async(req,res,)=>{
    try{
        const data = await person.find();
        console.log('Data fetched from DB');
        res.status(200).json(data);
    }catch(err){
        console.log('Error',err);
        res.status(500).json({error: 'Internal server error'})
    }
})

// Paremeterized call of person
router.get('/:workType',async (req,res)=>{
    try{
        const workType = req.params.workType;
        if(workType == 'chef' || workType == 'manager' || workType ==  'waiter'){
            const response = await person.find({work:workType});
            console.log('Response Fetched');
            res.status(200).json(response);
        }else{
            res.status(400).send({error:'Invalid Work Type'});
        }

    }catch(err){
        console.log(err);
        res.status(500).json({err:'Invalid work type'})
    }
    
})

// Updation
router.put('/:id',async (req,res)=>{
    try{
        const personId = req.params.id; // Extract the id from the URL parameter
        const updatedPersonData = req.body; // Get the new data for the person from the request body
        const response = await person.findByIdAndUpdate(personId,updatedPersonData, 
            {
                new:true, // Return the updated document
                runValidators: true, // Run mongoose validation
            }); 
            if(!response){
                return res.status(404).send("No user with this Id found");
            }
            console.log('Data updated');
            res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({err:"Server Error"});
    }
})

router.delete( '/:id', async (req, res) => {
    try{
        const  personId = req.params.id;
        const response = await person.findByIdAndDelete(personId);
        if (!response) {
            return res.status(404).send("No record of such Person ID exists");
        }
        console.log( "Record deleted successfully!");
        res.status(200).json({msg:"Deleted Successfully!"});
    }catch(err){
        console.log(err);
        res.status(500).json({ err: 'Server error' });
    }
})
module.exports = router;