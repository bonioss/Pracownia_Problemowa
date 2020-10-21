const ErrorResponse = require('../utils/ErrorResponse');
const asyncHandler = require('../middleware/asyncHandler');
const User = require('../models/User.model');
const Kid = require('../models/Kid.model');


// @desc    Add kid by Parent
// @route   POST /api/v1/parent/addKid
// @access  Private

exports.addKid = asyncHandler(async (req, res, next) => {

    const {kidCode} = req.body;
    const kid = await Kid.findOne({ kidCode: kidCode });
    //check if kid identified by code exist
    if(!kid) {
        return next(new ErrorResponse('Invalid kid code', 401));
    }

    //add kid to parent
    const userEmail = req.user.email;
    const parent = await User.findOne({ email: userEmail });
    const parentKids = parent.kids;
    //check if kid is not already added
    if (!parentKids.includes(kid.id)){
      parentKids.push(kid);
      parent.update({ kids: parentKids })
      parent.save();
    }
    else {
        return next(new ErrorResponse('This kid is already added', 400));
    }

    //Send repsonse
    res.status(200).json({
      success:true,
      data: parentKids
    });

  });


// @desc    Get all parent kids
// @route   GET /api/v1/parents/myKids
// @access  Private

exports.getMyKids = asyncHandler(async (req, res, next) => {
  let kids = [];
  //User parent
  if (req.user.role === 'parent') {
    const parent = await User.findOne({ _id: req.user._id });
    kids = await Kid.find({ '_id':{ $in: parent.kids } })
  } else {
    return next(new ErrorResponse('Not authorized', 401))
  }
  //Send response
  res.status(200).json({
    success: true,
    data: kids
  });
});