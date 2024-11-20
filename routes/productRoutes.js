const express = require('express');
const productController = require('../controllers/productController');
const router = express.Router();

router.post('/category', productController.addCategory);
router.post('/product', productController.addProduct);

module.exports = router;
