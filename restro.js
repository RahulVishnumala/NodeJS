const express = require('express')
const app = express();

app.get('/',(req,res)=>{
    res.send("<h1>Welcome to my hotel... How can I help you?</h1>")
})
app.get('/menu',(req,res)=>{
    const menu = [
        { dish: 'pizza', price: 120 },
        { dish: 'noodles', price: 70 },
    ];
    let table = '<table border="1"><tr><th>Dish</th><th>Price</th></tr>';

    menu.forEach(item => {
        table += `<tr><td>${item.dish}</td><td>${item.price}</td></tr>`;
    });
    table += '</table>';

    res.send(table);
})
app.get('/pizza',(req,res)=>{
    res.send("Sure Sir, I would love to serve you with pizza");
})
app.get('/noodles',(req,res)=>{
    res.send("Sure Sir, I would love to serve you with noodles");
})

const PORT = 3000
app.listen(PORT,(err)=>{
    console.log("Server listened at port "+PORT)
})