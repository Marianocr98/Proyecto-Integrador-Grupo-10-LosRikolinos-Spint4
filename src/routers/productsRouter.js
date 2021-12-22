const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController')

router.get('/productos', productController.productos)
router.get('/productDetail/:id', productController.productDetail);
router.get('/shopping-cart', productController.shoppingCart);
router.get('/admin', productController.admin);
router.get('/productos/:categoria', productController.category);
router.get('/search', productController.search);


module.exports = router;