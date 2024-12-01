const mongoose = require('mongoose');
require('dotenv').config();

const connection = mongoose.connect(process.env.CONNECTION_STRING).then(()=>{
    console.log("connected to databse")
})

module.exports = connection