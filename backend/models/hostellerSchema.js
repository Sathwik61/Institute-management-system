const mongoose = require('mongoose');

const hostellerSchema = new mongoose.Schema({
    name: {
        type: String
        
    },
    rollNum: {
        type: String
        },
    password: {
        type: String
        },
    hostelName:{
        type:String
    }
});

module.exports = mongoose.model("hostellerz", hostellerSchema);