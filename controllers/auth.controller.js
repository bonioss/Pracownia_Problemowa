const ErrorResponse = require('../utils/ErrorResponse');
const asyncHandler = require('../middleware/asyncHandler');
const User = require('../models/User.model');
const Agency = require('../models/Agency.model');
const getSignedJwtToken = require('../middleware/getToken');
const generator = require('generate-password');
const shortid = require('shortid');
const nodemailer = require("nodemailer");

// @desc    Login user
// @route   POST /api/v1/auth/login
// @access  Public
exports.login = asyncHandler(async (req, res, next) => {
    
    const { email, password } = req.body;
    // Validation email & password
    if (!email || !password) {
      return next(new ErrorResponse('Please provide email and password.', 400));
    }
    // Check for user or agency
    const user = await User.findOne({ email }).select('+password');
    const agency = await Agency.findOne({ email }).select('+password');
    if (!user && !agency) {
      return next(new ErrorResponse('Invalid credentials.', 401));
    }
    // Compare password
    if(user) {
      const isPasswordCorrect = await user.comparePassword(password);
      if (!isPasswordCorrect) {
        return next(new ErrorResponse('Invalid credentials.', 401));
      }
    } else if (agency) {
      const isPasswordCorrect = await agency.comparePassword(password);
      if (!isPasswordCorrect) {
        return next(new ErrorResponse('Invalid credentials.', 401));
      }
    }

    // Create token
    let token = {}
    let resData = {}
    if (user) {
      token = getSignedJwtToken(user._id);
      resData = await User.findById(user._id).select('-_id -password -__v');
    } else if (agency) {
      token = getSignedJwtToken(agency._id);
      resData = await Agency.findById(agency._id).select('-_id -password -__v');
    }
   
    //Create cookie with token
    res.cookie('token', token, {
      expires: new Date(Date.now() + 86400000),
      secure: false, // set to true if your using https
      httpOnly: true,
    });
 
    
    //Send repsonse
    res.status(200).json({
      success:true,
      data:resData
    })
  });

// @desc    Add agency
// @route   POST /api/v1/auth/addAgency
// @access  Private, admin
exports.addAgency = asyncHandler(async (req, res, next)=>{
try {
  const {email, name, ordersPeriod, winterTermEnd, summerTermEnd} = req.body;

let checkCrudentials={};
checkCrudentials.user = await User.findOne({email});
checkCrudentials.agency = await Agency.findOne({email});

if(new Date(winterTermEnd) <= new Date(Date.now()) || new Date(summerTermEnd) <= new Date(Date.now())) {
  return next (new ErrorResponse(`Please provide date later than today`, 409));
} else if (new Date(winterTermEnd) >= new Date(summerTermEnd)) {
  return next (new ErrorResponse(`Summer term end must be later than winter one`, 409));
}

  //check if mail is unique
  if(checkCrudentials.user || checkCrudentials.agency) {
    return next(new ErrorResponse('E-mail already exists', 409))
  }

const password = generator.generate({
  lenght: 10,
  numbers: true
});
const agencyCode = shortid.generate();

//create Agency

const agency = await Agency.create({
  email,
  password,
  name,
  agencyCode,
  ordersPeriod,
  winterTermEnd: new Date(winterTermEnd),
  summerTermEnd: new Date(summerTermEnd)
})

//create mail transporter
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
      user: process.env.CATERING_MAIL,
      pass: process.env.CATERING_MAIL_PASSWORD
  },
  sendMail: true
});

const msg = {
  from: `"Food Catering" <${process.env.CATERING_MAIL}>`, // sender address
  to: `${email}`, // list of receivers
  subject: "Password", // Subject line
  text: `Your password: ${password}, Your Code: ${agencyCode}`, // plain text body
}

//send mail
const info = await transporter.sendMail(msg);

const resData = await Agency.findById(agency._id).select('-_id -password -__v');
res.status(200).json({
  success:true,
  data: resData
});
} catch (error) {
    if (error.name === 'ValidationError') {
      let errors = {};
      Object.keys(error.errors).forEach((key) => {
        errors[key] = error.errors[key].message;
      });
      let resp = {
        success: false,
        errors,
      }
      return res.status(400).send(resp);
    }
    return res.status(500).send({
      success: false,
      error: error
    });
  }


});

// @desc    Register for parent
// @route   POST /api/v1/auth/register
// @access  Public
exports.register = asyncHandler(async(req, res, next) => {
  try {
    const {email, password, firstName, lastName, agencyCode} = req.body;
  const agency = await Agency.findOne({agencyCode});
  let checkCrudentials = {};
  checkCrudentials.user = await User.findOne({email});
  checkCrudentials.agency = await Agency.findOne({email});

  //check if mail is unique
  if(checkCrudentials.user || checkCrudentials.agency) {
    return next(new ErrorResponse('E-mail already exists', 409))
  }
  //check if agency exist
  if(!agency) {
    return next(new ErrorResponse('Invalid agency code', 401));
  } 
  //create user
  const user = await User.create({
    email,
    password,
    firstName,
    lastName,
    agencyCode
  });

  
  const token = getSignedJwtToken(user._id);
  
  //Create cookie with token
  res.cookie('token', token, {
    expires: new Date(Date.now() + 86400000),
    secure: false, // set to true if your using https
    httpOnly: true,
  });
  const resData = await User.findById(user._id).select('-_id -password -__v');
  //Send repsonse
  res.status(200).json({
    success:true,
    data: resData
  });
  } catch (error) {
    if (error.name === 'ValidationError') {
      let errors = {};
      Object.keys(error.errors).forEach((key) => {
        errors[key] = error.errors[key].message;
      });
      let resp = {
        success: false,
        errors,
      }
      return res.status(400).send(resp);
    }
    return res.status(500).send({
      success: false,
      error: "Something went wrong"
    });
  }
  
});

// @desc    Register for parent
// @route   GET /api/v1/auth/me
// @access  Public
exports.getMe = asyncHandler( async(req, res, next) => {
  let user = {};
  if (req.user.role !== 'agency')
    user = await User.findById({_id: req.user._id}).select('-kids -__v');
  else 
    user = await Agency.findById(({_id: req.user._id})).select('-__v');  
  res.status(200).json({
    success: true,
    data: user
  });
});