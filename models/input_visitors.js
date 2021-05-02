const mongoose = require('mongoose');

//Input Schema

const InputVisitor = mongoose.model('InputVisitor', {
    queue_numb:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    adress:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    }
});
module.exports = { InputVisitor }