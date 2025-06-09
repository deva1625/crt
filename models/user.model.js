const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    department: {
        type: Number,
        required: true
    }
})

const userModel = mongoose.model("user", userSchema)

module.exports = userModel   
