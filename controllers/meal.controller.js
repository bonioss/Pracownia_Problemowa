const ErrorResponse = require('../utils/ErrorResponse');
const asyncHandler = require('../middleware/asyncHandler');
const Meal = require('../models/Meal.model');
const {getType} = require('./order.controller');

// @desc    Add meal
// @route   POST /api/v1/meal/addMeal
// @access  Private

exports.addMeal = asyncHandler(async (req, res, next) => {
    const {type, description, date} = req.body;
    const price = getType(type);
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
    let startDate = new Date(req.query.date);
    let finishDate = new Date(req.query.date);
    finishDate.setDate(finishDate.getDate() + 1);
    const count = await Meal.countDocuments({"date": {"$gte":startDate, "$lt": finishDate}}).exec()
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
      console.log();
      results.results = await Meal.find({"date": {"$gte":startDate, "$lt": finishDate}}).limit(limit).skip(startIndex).select(' -__v').exec()
      res.paginatedResults = results
      next()
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


// @desc    Delete meal 
// @route   DELETE /api/v1/meal/:id
// @access  Private, admin

exports.deleteMeal = asyncHandler(async (req, res, next) => {
  Meal.findByIdAndRemove(req.params.id, function(err, docs){
    if (err){
      res.status(500).json({
        success: false,
        error: err.message
      })
    }else{
      res.status(200).json({
        success: true,
    });
    }
  })
});