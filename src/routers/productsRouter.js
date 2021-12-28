const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const productController = require('../controllers/productController')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/img');
    },
    filename: (req, file, cb) => {
        console.log(file);
        const newFilename = file.fieldname + '-' + Date.now() + path.extname(file.originalname);
        cb(null, newFilename);
    }
});

const upload = multer({ storage: storage });


//-- Listado de productos
router.get('/productos', productController.productos)

// Acción de creación (a donde se envía el formulario)-check
router.post('/productos/createProduct', upload.single('imgProductos'), productController.createProduct)


//-- Detalle de un producto particular
router.get('/productDetail/:id', productController.productDetail);

// Formulario de edición de productos
router.get('/productDetail/:id/edit', productController.productEdition);

router.post('/productDetail/:id', productController.productDetail);

// Acción de edición (a donde se envía el formulario):
router.put('/productDetail/:id/', productController.edit);

router.delete('/productDetail/:id', productController.delete);

// -----------EN PROCESO------------------------

router.get('/shopping-cart', productController.shoppingCart);
// -----------EN PROCESO------------------------



// -----------TERMINADOS------------------------

// ----RUTA DE LAS CATEGORIAS DE LOS PRODUCTOS---
router.get('/productos/:categoria', productController.category);

// ----RUTA DE LA BARRA DEL BUSCADOR---- 
router.get('/search', productController.search);

//  --------VISTA DEL FORMULARIO DE CREACION - ADMIN--------
router.get('/viewCreate', productController.viewCreate)

// -----------TERMINADOS------------------------


module.exports = router;