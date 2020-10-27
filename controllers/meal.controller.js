const ErrorResponse = require('../utils/ErrorResponse');
const asyncHandler = require('../middleware/asyncHandler');
const Meal = require('../models/Meal.model');


// @desc    Add meal
// @route   POST /api/v1/meal/addMeal
// @access  Private

exports.addMeal = asyncHandler(async (req, res, next) => {
    const {type, description, date, price} = req.body;

    //create meal
    const meal = await Meal.create({
        type,
        description,
        date,
        price,
    });

    //Send repsonse
    res.status(200).json({
      success:true,
    });

  });


// @desc    Get meals by day
// @route   GET /api/v1/meal/myMeals?date=${date}&page=${page}&limit=${limit}
// @access  Private, admin
exports.myMeals = asyncHandler(async (req, res, next) => {
    const page = parseInt(req.query.page)
    const limit = parseInt(req.query.limit)

    const startIndex = (page - 1) * limit
    const endIndex = page * limit

    const results = {}
    const count = await Meal.countDocuments().exec()
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
      results.results = await Meal.find({date: req.query.date}).limit(limit).skip(startIndex).select('-_id -__v').exec()
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
    });

});


// @desc    Delete meal 
// @route   DELETE /api/v1/meal/deleteMeal
// @access  Private, admin

// missing