const fs = require('fs');
const path = require('path');

// ESTO SERIA EL GESTOR DEL MODELO

const jsonDB = require('../model/jsonDatabase');

// Maneja todos los métodos para PRODUCTO, que lo pasa como parámetro
const productModel = jsonDB('products');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const productController = {

    productos: (req,res) => {

        const products = productModel.productos();

        res.render('./productos/productos' ,{productos:products})
    },

    productDetail: (req, res) => {

        let detalle = productModel.find(req.params.id);

        res.render('./productos/productDetail', {detail: detalle});
    },

    category: (req, res) => {

        const productos = productModel.searchCategory(req.params.categoria);

        res.render('./productos/categorias', {productos})
    },
    search: (req, res) => {

        let busqueda = req.query.search.toLowerCase();
        console.log("Estoy buscando:" + busqueda);

        let productos = productModel.readFile();

        let filtrados = productos.filter(e => e.title.toLowerCase().includes(busqueda) || e.category.toLowerCase().includes(busqueda));

        res.render('./menu/comidaReq', { filtrados: filtrados})
    },
    
    shoppingCart : (req,res)=>{
        res.render('./productos/shopping-cart');
    }, 
    admin: (req,res)=>{
        res.render('./admin/admin');
    },
}


module.exports = productController;