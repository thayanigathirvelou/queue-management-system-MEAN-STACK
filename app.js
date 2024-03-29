const express =  require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const app = express();
app.use(bodyParser.json);





// app.get('/', (req, res) => {
//     res.send("hello");
// });


// app.get('/input_visitor', (req,res) => {
//     res.send('visitor');
// });

const connectDB= require('./config/db');

//Load Config
dotenv.config({ path: './config/config.env' });

connectDB();

//Routes
app.use('/', require('./routes/index'));

app.listen(3000);