const mongoose = require('mongoose')
const validator = require('validator')

const UserSchema = new mongoose.Schema({
    universityID: {
        type: Number,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    }
})

const User = mongoose.model('user', UserSchema, 'user')
module.exports = User