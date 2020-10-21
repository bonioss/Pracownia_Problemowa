const asyncHandler = require('../middleware/asyncHandler');
const Agency = require('../models/Agency.model');
const Kid = require('../models/Kid.model');
const User = require('../models/User.model');
const ErrorResponse = require('../utils/ErrorResponse');

// @desc    Get my agencies
// @route   GET /api/v1/agencies/myAgencies?page=${page}&limit=${limit}
// @access  Private, admin
exports.getMyAgencies = asyncHandler(async (req, res, next) => {
    const page = parseInt(req.query.page)
    const limit = parseInt(req.query.limit)

    const startIndex = (page - 1) * limit
    const endIndex = page * limit

    const results = {}
    const count = await Agency.countDocuments().exec()
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
      results.results = await Agency.find().limit(limit).skip(startIndex).select('-_id -__v').exec()
      res.paginatedResults = results
      next()
    } catch (e) {
      res.status(500).json({
        success: false,  
        error: e.message 
    })
    }
    res.status(200).json({
        success: true,
        data: res.paginatedResults
    })

})

// @desc    Get agency by agencyCode
// @route   GET /api/v1/agencies/:agencyCode
// @access  Private, admin
exports.getAgency = asyncHandler(async (req, res, next) => {
    let agency = await Agency.findOne({agencyCode: req.params.agencyCode}).select('-_id -password -__v'); 
    console.log(req.user.role);
    if(!agency) {
        return next(new ErrorResponse(`Agency with code ${req.params.agencyCode} does not exist.`, 401))
    }
    res.status(200).json({
        success: true,
        data: agency
    })
})

// @desc    Delete agency by agencyCode
// @route   DELETE /api/v1/agencies/:agencyCode
// @access  Private, admin
exports.deleteAgency = asyncHandler(async (req, res, next) => {
    let agency = await Agency.findOne({agencyCode: req.params.agencyCode}); 
    if(!agency) {
        return next(new ErrorResponse(`Agency with code ${req.params.agencyCode} not found`, 404))
    }

    const kids = await Kid.find({agencyCode: req.params.agencyCode})
    kids.forEach(async kids => {
        await kids.remove();
    });

    const users = await User.find({agencyCode: req.params.agencyCode})
    users.forEach(async users => {
        await users.remove();
    });

    await agency.remove();

    res.status(200).json({
        success: true,
    })
})

