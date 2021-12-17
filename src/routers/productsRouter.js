const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController')

router.get('/productos', productController.productos)
router.get('/productDetail/:id', productController.productDetail);
router.get('/shopping-cart', productController.shoppingCart);
router.get('/create', productController.create);
router.get('/productos/Pizza', productController.productsPizza);
router.get('/productos/Hamburguesa', productController.productsHamburguer);
router.get('/productos/Asado', productController.productsAsado);
router.get('/productos/Bebidas', productController.productsBebidas);
router.get('/productos/pastas', productController.productsPastas);
router.get('/productos/Empanadas', productController.productsEmpanadas);



module.exports = router;