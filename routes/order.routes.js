const express = require('express');
const { createOrder } = require('../controllers/order.controller');
const router = express.Router();
const { protect } = require('../middleware/auth');

router
    .route('/:kidCode')
    .post(protect, createOrder);
    
module.exports = router;