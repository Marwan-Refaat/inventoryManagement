const mongoose = require('mongoose')
const validator = require('validator')

const HistorySchema = new mongoose.Schema({
    operation: {
        type: Boolean,
        trim: true, 
        required: true
    },
    number: {
        type: Int,
        required: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }, 
    reason: {
        type: String,
        required: true
    }
}, {timestamps: true})

const History = mongoose.model('History', HistorySchema);
module.exports= History