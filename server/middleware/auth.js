const jwt = require('jsonwebtoken');
const asyncHandler = require('./asyncHandler');
const User = require('../models/User.model');
const Agency = require('../models/Agency.model');

exports.protect = asyncHandler(async(req, res, next) => {
    const token = req.cookies.token || '';
    try {
      if (!token) {
        return res.status(401).json('You need to Login')
      }
      const decrypt = await jwt.verify(token, process.env.JWT_SECRET);
      
      req.user =  await User.findById(decrypt.id);
      if(req.user === null) req.user = await Agency.findById(decrypt.id);
      next();
    } catch (err) {
      return res.status(500).json(err.toString());
    }
});

// Role authorization
exports.authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorResponse(
          `Role ${req.user.role} is not authorized to access this route.`,
          403
        )
      );
    }
    next();
  };
};