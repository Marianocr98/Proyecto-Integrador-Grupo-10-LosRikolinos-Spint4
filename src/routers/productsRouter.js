const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController')


//-- Listado de productos

router.get('/productos', productController.productos)

// Acción de creación (a donde se envía el formulario)-check
router.post('/productos', productController.all)

//-- Formulario de creación de productos

router.get('/productos/create', productController.formCreate)

//-- Detalle de un producto particular

router.get('/productDetail/:id', productController.productDetail);
// Formulario de edición de productos
router.get('/productDetail/:id/edit', productController.productEdition);


router.post('/productDetail/:id', productController.productDetail);

// Acción de edición (a donde se envía el formulario):
router.put('/productDetail/:id/', productController.edit);

router.delete('/productDetail/:id', productController.delete);



router.get('/shopping-cart', productController.shoppingCart);
// router.get('/admin', productController.admin);
router.get('/productos/:categoria', productController.category);
router.get('/search', productController.search);


module.exports = router;