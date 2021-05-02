const express = require('express');
const router = express.Router();


const { InputVisitor } =require('../models/input_visitors');


//get all the input
router.get('/api/input_visitor', (req, res) => {
    InputVisitor.find({}, (err, data) => {
            if(!err) {
                res.send(data);
            } else {
                console.log(err);
            }
    });
});

module.exports = router;
