const mongoose = require('mongoose');

// Models are the blueprint of our database ki hamara database kaisa dikhega.
// Schema is like a blueprint that defines the structure and data types of your documents within a collection.
const menuItemSchema = new mongoose.Schema({
    name:{
        type:String, 
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    taste:{
        type:String,
        enum:['Sweet','Spicy','Sour'],
        required:true,
    },
    is_drink:{
        type:Boolean,
        default: false
    },
    ingredients:{
        type:[String],
        default:[]
    },
    num_sales:{
        type:Number,
        default:0,
    }
});

const menu =  mongoose.model('menu',menuItemSchema);
module.exports = menu;