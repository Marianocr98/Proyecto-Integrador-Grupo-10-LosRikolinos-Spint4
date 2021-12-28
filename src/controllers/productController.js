const fs = require('fs');
const path = require('path');

// ESTO SERIA EL GESTOR DEL MODELO

const jsonDB = require('../model/jsonDatabase');

// Maneja todos los métodos para PRODUCTO, que lo pasa como parámetro
const productModel = jsonDB('products');


const productController = {

    productos: (req,res) => {

        const products = productModel.productos();

        res.render('./productos/productos' ,{productos:products})
    },
    all:(req,res)=>{
        res.render('./productos/productos' ,{productos:products})
    },
    formCreate: (req,res)=>{
        res.render('./admin/admin')
    },
    productEdition : (req,res)=>{
        res.render( './admin/productEdition')
    },
    edit : (req,res)=>{
        const products = productModel.productos();
        let id = req.params.id
        for(let i = 0 ;  i < products.length; i++){
            let idProducts = productModel[i].id
                if( idProducts == id){
                    products[i].title = req.body.title
                    products[i].category = req.body.category
                    products[i].price = req.body.price
                }
        }
    },
    delete : (req,res)=>{
        const products = productModel.productos();
        let id = req.params.id
        products = products.filter(product =>{
        let idProducts = product.id
        return   id  != idProducts
        })
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

}


module.exports = productController;