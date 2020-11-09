const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const MealSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['breakfast', 'lunch', 'soup', 'main dish', 'dinner', 'teatime'],
        required: [true, 'Type of meal is required.']
    },
    description: {
        type: String,
        required: [true, 'Description of the meal is required.'],
        maxlength: [256, 'Description of the meal cannot be longer than 256 characters.']
    },    
    date: {
        type: Date,
        required: [true, 'Date is required.']
    },
    price: {
        type: Number,
        default: 0
    },
});

module.exports = mongoose.model('Meal', MealSchema);