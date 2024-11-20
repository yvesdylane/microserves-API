const express = require('express');
const orderController = require('../controllers/orderController');
const protect = require('../middlewares/authMiddleware');
const router = express.Router();

// Protected route for creating an order
router.post('/order', protect, orderController.createOrder);

// Protected route for adding an order item
router.post('/order-item', protect, orderController.addOrderItem);

module.exports = router;