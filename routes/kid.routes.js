const express = require('express');
const router = express.Router();
const {agencyAddKid, agencyGetKids, agencyDeleteKid} = require('../controllers/kid.controller');
const { protect, authorize } = require('../middleware/auth');

// add kid by Agency

router
.route('/agencyAddKid')
.post(protect, authorize('agency'), agencyAddKid);

// showing kids by Agency

router
.route('/agencyGetKids')
.get(protect, authorize('agency'), agencyGetKids);

// delete kid by agency

router
.route('/:kidCode')
.delete(protect, authorize('agency'), agencyDeleteKid);

module.exports = router;