const mongoose = require('mongoose');

let UserSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    linkedin: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    shift: {
        type: Array,
        required: true
    },
    abilities: {
        type: Array,
        required: true
    }
});

module.exports = mongoose.model('User', UserSchema);