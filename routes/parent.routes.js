const express = require('express');
const router = express.Router();
const {addKid, getMyKids} = require('../controllers/parent.controller');
const { protect, authorize } = require('../middleware/auth');

// adding kid by Parent

router
.route('/addKid/:kidCode')
.post(protect, authorize('parent'), addKid);

router
.route('/getMyKids')
.get(protect, authorize('parent'), getMyKids);

module.exports = router;
