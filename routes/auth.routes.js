const express = require('express');
const router = express.Router();
const {login, addAgency, register} = require('../controllers/auth.controller');
const { protect, authorize } = require('../middleware/auth');

router
.route('/login')
.post(login);

router
.route('/addAgency')
.post(protect, authorize('admin'), addAgency);

router
.route('/register')
.post(register)


module.exports = router;