const ErrorResponse = require('../utils/ErrorResponse');
const asyncHandler = require('../middleware/asyncHandler');
const shortid = require('shortid');
const User = require('../models/User.model');
const Agency = require('../models/Agency.model');
const Kid = require('../models/Kid.model');


// @desc    Add kid
// @route   POST /api/v1/kid/agencyAddKid
// @access  Private, agency

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


// @desc    Get list of kids
// @route   GET /api/v1/kid/agencyGetKids?page=${page}&limit=${limit}
// @access  Private, agency

exports.agencyGetKids = asyncHandler(async (req, res, next) => {
  const page = parseInt(req.query.page)
  const limit = parseInt(req.query.limit)

  const startIndex = (page - 1) * limit
  const endIndex = page * limit

  const results = {}
  const count = await Kid.countDocuments().exec()
  if (endIndex < count) {
    results.next = {
      page: page + 1,
      limit: limit
    }
  }
  
  if (startIndex > 0) {
    results.previous = {
      page: page - 1,
      limit: limit
    }
  }

  results.numberOfPages = Math.ceil(count / limit);
  try {
    results.results = await Kid.find({agencyCode: req.user.agencyCode}).limit(limit).skip(startIndex).select('-_id -__v').exec()
    res.paginatedResults = results;
    next();
  } catch (e) {
    return res.status(500).json({
      success: false,  
      error: e.message 
  })
  }
  res.status(200).json({
      success: true,
      data: res.paginatedResults
  });

});


// @desc    Delete kid by kidCode
// @route   DELETE /api/v1/kid/:kidCode
// @access  Private, agency

exports.agencyDeleteKid = asyncHandler(async (req, res, next) => {
  let kid = await Kid.findOne({kidCode: req.params.kidCode}); 
  if(!kid) {
      return next(new ErrorResponse(`Kid with code ${req.params.kidCode} not found`, 404))
  }
  else if(kid.agencyCode != req.user.agencyCode) {
    return next(new ErrorResponse(`Kid with code ${req.params.kidCode} does not belong to your's agency`, 401))
  }

  const parents = await User.find({ role:"parent", agencyCode: req.user.agencyCode });

  parents.forEach(function(parent) {
    parent.kids.pop(kid);
    parent.save();
  })

  await kid.remove();

  res.status(200).json({
      success: true,
  });
});