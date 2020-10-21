const express = require('express');
const router = express.Router();
const {getMyAgencies, getAgency, deleteAgency} = require('../controllers/agency.controller');
const { protect, authorize } = require('../middleware/auth');

router
.route('/myAgencies')
.get(protect, authorize('admin'), getMyAgencies);

router
.route('/:agencyCode')
.get(protect, authorize('admin'), getAgency)
.delete(protect, authorize('admin'), deleteAgency);

module.exports = router;