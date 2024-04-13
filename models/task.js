const mongoose = require('mongoose')

// Models are the blueprint of our database ki hamara database kaisa dikhega.
// Schema is like a blueprint that defines the structure and data types of your documents within a collection.
const taskSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true,
    },
    description:{
        type:String,
        required:true,
    },
    priority:{
        type:String,
        enum:['high','medium','low'],
        default: 'medium',
    },
    dueDate:{
        type:Date,
        required: false,
    }
});

const task = mongoose.model('task', taskSchema);
module.exports = task;