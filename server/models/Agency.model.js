const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const AgencySchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email is required.'],
        unique: true,
        match: [
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
          'Please add a valid email'
        ]
    },
    role: {
        type: String,
        default: 'agency'
    },
    password: {
        type: String,
        required: [true, 'Password is required.'],
        minlength: [8, 'Password must be minimum 8 letters length.'],
        select: false,
    },
    name: {
        type: String,
        required: [true, 'Agency name is required.'],
        maxlength: [100, 'Agency name cannot be longer than 100 letters.']
    },
    agencyCode: {
        type: String,
        required: [true, 'Agency code is required.'],
        maxlength: [36, 'Agency code cannot be longer than 100 letters.']
    },
    ordersPeriod: {
        type: String,
        enum: ['day', 'week', 'month', 'semestr'],
        required: [true, 'Period of orders is required.']
    }
});

AgencySchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

// Compare password
AgencySchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('Agency', AgencySchema);