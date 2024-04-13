const mongoose = require('mongoose')
require('dotenv').config()
// Define the MongoDB connection URL
const mongoURL= process.env.MONGODB_URL_LOCAL // Replace 'hotels' with your desired database name
// const mongoURL = process.env.MONGODB_URL;

// Set up MongoDB connection
// The mongoose.connect function is used to establish a connection with the MongoDB server. 
// It takes the MongoDB connection URL and an options object. 
// The useNewUrlParser and useUnifiedTopology options are set to true to enable the new URL parser and the unified topology.
mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

// Get the default connection
// Mongoose maintains a default connection 'object' representing the MongoDB connection
const db = mongoose.connection;


// Event Listener :-
// Database me koi bhi events hoti hai to event listener sunta hai. 
// Aur user ko batata hai ki ye event hui hai.
// The following event listeners notify the user about the events happening in the database:-
db.on('connected',()=>{
    console.log('Connected to MongoDB server')
})
db.on('error',(err)=>{
    console.log('MongoDB connection error: ', err)
})
db.on('disconnected',()=>{
    console.log('MongoDB disconnected')
})

module.exports = db;