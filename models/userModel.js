const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    dateOfBirth:{
        type: Date,
        default: Date.now()
    },
    school:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('userModel', userSchema);