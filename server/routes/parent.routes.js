const express = require('express');
const router = express.Router();
const {addKid} = require('../controllers/parent.controller');
const { protect, authorize } = require('../middleware/auth');

// adding kid by Parent

router
.route('/addKid')
.post(protect, authorize('parent'), addKid);

module.exports = router;