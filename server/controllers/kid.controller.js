const ErrorResponse = require('../utils/ErrorResponse');
const asyncHandler = require('../middleware/asyncHandler');
const User = require('../models/User.model');
const Agency = require('../models/Agency.model');
const Kid = require('../models/Kid.model');
const getSignedJwtToken = require('../middleware/getToken');
const { v4: uuidv4 } = require('uuid');

// @desc    Add kid by Agency
// @route   POST /api/v1/auth/agencyAddKid
// @access  Private

exports.agencyAddKid = asyncHandler(async (req, res, next) => {

    const {firstName, lastName, agencyCode} = req.body;
    const agency = await Agency.findOne({agencyCode});
    //check if agency exist
    if(!agency) {
        return next(new ErrorResponse('Invalid agency code', 401));
    }
    //create kid
    const kid = await Kid.create({
        firstName,
        lastName,
        agencyCode
    });

    //Send repsonse
    res.status(200).json({
      success:true,
    });

  });