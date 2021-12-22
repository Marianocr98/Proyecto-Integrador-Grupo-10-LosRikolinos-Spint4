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


// -- Productos que iran en menu

router.get('/productos/Pizza', productController.productsPizza);
router.get('/productos/Hamburguesa', productController.productsHamburguer);
router.get('/productos/Asado', productController.productsAsado);
router.get('/productos/Bebidas', productController.productsBebidas);
router.get('/productos/pastas', productController.productsPastas);
router.get('/productos/Empanadas', productController.productsEmpanadas);



module.exports = router;