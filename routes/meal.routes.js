const express = require('express');
const router = express.Router();
const {addMeal, myMeals} = require('../controllers/meal.controller');
const { protect, authorize } = require('../middleware/auth');

// adding meal by admin
// showing meal by date

router
.route('/myMeals')
.get(protect, authorize('admin'), myMeals);

router
.route('/addMeal')
.post(protect, authorize('admin'), addMeal);

module.exports = router;