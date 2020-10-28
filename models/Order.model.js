const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    agencyCode: {
        type: String,
        required: [true, 'Agency code is required.'],
        maxlength: [36, 'Agency code cannot be longer than 36 letters.']
    },
    kidCode: {
        type: String,
        required: [true, 'Kid code is required.'],
        maxlength: [36, 'Kid code cannot be longer than 36 letters.']
    },
    period: {
        type: String,
        enum: ['day', 'week', 'month', 'semestr'],
        required: [true, 'Period of orders is required.']
    },
    meals: [{
        date: {
            type: Date,
            default: Date.now
        },
        type: {
            type: String,
            enum: ['breakfast', 'lunch', 'soup', 'main dish', 'dinner', 'tea time'],
            required: [true, 'Type of meal is required']
        },
        price: {
            type: Number,
            required: [true, 'Price of order is required']
        }
    }],
    price: {
        type: Number,
        required: [true, 'Price of order is required']
    },
    comments: {
        type: String,
        maxlength: [250, 'Comments cannot be longer than 250 letters']
    },
    paid: {
        type: Boolean,
        default: false
    },
    startDate: {
        type: Date,
        default: Date.now
    },
    endDate: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Order', OrderSchema);