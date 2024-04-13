const express = require('express');
const app = express();
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Import the person routes
const personRoutes = require('./routes/personRoutes');
app.use('/person',personRoutes); // use the routers

// Import the menu routes
const menuRoutes = require('./routes/menuRoutes');
app.use('/menu',menuRoutes);

const PORT = 3000
app.listen(PORT,()=>{
    console.log('Listening to port ',PORT)
})