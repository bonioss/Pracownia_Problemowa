const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
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
        enum: ['admin', 'parent'],
        default: 'parent'
    },
    password: {
        type: String,
        required: [true, 'Password is required.'],
        minlength: [8, 'Password must be minimum 8 letters length.'],
        select: false,
    },
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
    },
    wallet: {
        type: Number,
        default: 0
    },
    kids: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Kid'
    }]
});

// Password encryption
UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

// Compare password
UserSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', UserSchema);