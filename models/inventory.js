const mongoose = require('mongoose')
const validator = require('validator')

const InventorySchema = new mongoose.Schema({
    componentName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    numAvailable: {
        type: Number,
        required: true
    },
    numInUse: {
        type: Number,
        required: true
    },
    numExpired: {
        type: Number,
        required: true
    },
    origStock: {
        type: Number,
        required: true
    },
    currStock: {
        type: Number,
        required: true
    }
}, {timestamps: true})


const Inventory = mongoose.model('inventory', InventorySchema, 'inventory');
module.exports= Inventory