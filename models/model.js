const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({

    name: {
        type: String,
        unique: true,
        required: true,
        
    },
    age: {
        required: true,
        type: Number
    }
})

module.exports = mongoose.model('Person', PersonSchema)
