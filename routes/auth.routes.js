const express = require('express');
const { get } = require('mongoose');
const router = express.Router();
const {login, addAgency, register, getMe} = require('../controllers/auth.controller');
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

router  
    .route('/me')
    .get(protect, getMe);
module.exports = router;