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

//Sava Input
router.post('/api/input_visitor/add', (req, res) => {
    const inp = new InputVisitor({
        queue_numb: req.body.queue_numb,
        name: req.body.name,
        address: req.body.address,
        gender: req.body.address,
        age: req.body.age,
        category: req.body.category
    });
    inp.save((err, data) => {
        res.status(200).json({ code:200, message: 'Data Added Successfully', addInputVisitor:data})
    });
});

module.exports = router;
