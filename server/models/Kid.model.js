const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const KidSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'First name is required.'],
        maxlength: [50, 'First name cannot be longer than 50 letters.']
    },
    lastName: {
        type: String,
        required: [true, 'Last name is required.'],
        maxlength: [50, 'Last name cannot be longer than 50 letters.']
    },
    agencyCode: {
        type: String,
        required: [true, 'Agency code is required.'],
        maxlength: [36, 'Agency code cannot be longer than 36 letters.']
    }
})

module.exports = mongoose.model('Kid', KidSchema);