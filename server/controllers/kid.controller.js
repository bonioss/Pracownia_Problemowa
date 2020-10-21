const ErrorResponse = require('../utils/ErrorResponse');
const asyncHandler = require('../middleware/asyncHandler');
const shortid = require('shortid');
const User = require('../models/User.model');
const Agency = require('../models/Agency.model');
const Kid = require('../models/Kid.model');


// @desc    Add kid by Agency
// @route   POST /api/v1/kid/agencyAddKid
// @access  Private

exports.agencyAddKid = asyncHandler(async (req, res, next) => {
    const {firstName, lastName, agencyCode} = req.body;
    const agency = await Agency.findOne({agencyCode});

    //check if agency exist
    if(!agency) {
        return next(new ErrorResponse('Invalid agency code', 401));
    }

    //create kid
    kidCode = shortid.generate()
    const kid = await Kid.create({
        firstName,
        lastName,
        agencyCode,
        kidCode,
    });

    //Send repsonse
    res.status(200).json({
      success:true,
    });

  });