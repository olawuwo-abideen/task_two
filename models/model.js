const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({

    name: {
        type: String,
        unique: true,
        required: true,
        
    }
})

module.exports = mongoose.model('Person', PersonSchema)
