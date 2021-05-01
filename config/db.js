const mongoose = require("mongoose");


const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrIParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log('Mongo DB Connected: ${conn.connection.host}');

    }
    catch(err){
        console.log(err);
    }
}