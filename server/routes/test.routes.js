const express = require('express');
const { getTest } = require('../controllers/test.controller');
const router = express.Router();
const { protect } = require('../middleware/auth');

router
    .route('/')
    .get(protect, getTest);
    
module.exports = router;