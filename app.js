const express =  require('express');
const dotenv = require('dotenv');


const app = express();


app.get('/', (req, res) => {
    res.send("hello");
});

app.get('/input_visitor', (req,res) => {
    res.send('visitor');
});


app.listen(3000);