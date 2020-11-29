const express = require('express');
const { 
    createOrder,
    getOrdersByAgencyCode, 
    getOrdersByKidCode, 
    getOrderById, 
    getAvailableDate,
    updatePaymentStatus,
    deleteMeal,
    getPriceForOrder,
    getKidsForOrder,
    getStats
} = require('../controllers/order.controller');
const router = express.Router();
const { protect, authorize } = require('../middleware/auth');

router
    .route('/:kidCode')
    .post(protect, authorize('agency', 'parent'), createOrder)
    .get(protect, authorize('parent', 'agency'), getOrdersByKidCode);

router
    .route('/agencyOrders/:agencyCode')
    .get(protect, authorize('admin', 'agency'), getOrdersByAgencyCode);

router
    .route('/order/:id')
    .get(protect, authorize('admin', 'agency', 'parent'), getOrderById);    

router
    .route('/date/:kidCode')
    .get(protect, authorize('parent', 'agency'), getAvailableDate);    

router
    .route('/payment/:id')
    .post(protect, authorize('admin', 'agency'), updatePaymentStatus);

router
    .route('/order/:id/kid/:kidCode/meal/:mealId')
    .delete(protect, authorize('parent', 'agency'), deleteMeal);   

router
    .route('/summary/:kidCode')
    .post(protect, authorize('agency', 'parent'), getPriceForOrder);
    
router
    .route('/create/kids')
    .get(protect, authorize('parent', 'agency'), getKidsForOrder);  
    
router
    .route('/stats/summary')
    .get(protect, authorize('admin'), getStats);     
    
module.exports = router;