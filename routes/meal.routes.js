const express = require('express');
const router = express.Router();
const {addMeal, myMeals, deleteMeal} = require('../controllers/meal.controller');
const { protect, authorize } = require('../middleware/auth');

// show meal by date

router
.route('/myMeals')
.get(protect, authorize('admin'), myMeals);

// add meal

router
.route('/addMeal')
.post(protect, authorize('admin'), addMeal);

// delete meal

router
.route('/:id')
.delete(protect, authorize('admin'), deleteMeal);

module.exports = router;