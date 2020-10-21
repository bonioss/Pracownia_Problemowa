const express = require('express');
const router = express.Router();
const {getMyAgencies, getAgency, deleteAgency} = require('../controllers/agency.controller');
const { protect, authorize } = require('../middleware/auth');

router
.route('/:agencyCode')
.get(protect, authorize('admin'), getAgency)
.delete(protect, authorize('admin'), deleteAgency);

router
.route('/')
.get(protect, authorize('admin'), getMyAgencies);


module.exports = router;