const mongoose = require('mongoose');

const carsSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: false
    },
})

const car = mongoose.model('cars', carsSchema);
module.exports = car;
