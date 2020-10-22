const express = require('express');
const router = express.Router();
const {agencyAddKid} = require('../controllers/kid.controller');
const { protect, authorize } = require('../middleware/auth');

// adding kids by Agency
// adding kids by Parents
// showing kids by Agency
// showing kids by Parents

router
.route('/agencyAddKid')
.post(protect, authorize('agency'), agencyAddKid);

module.exports = router;