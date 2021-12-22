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
    productsEmpanadas: (req, res) => {
        const productsEmpanadas = productModel.empanadas();
        res.render('./productos/productEmpanada', {empanada: productsEmpanadas});
    },
    productsHamburguer : (req,res) => {
        const productsHamburguesa = productModel.hamburguesa()
        res.render('./productos/productHamburguer',{productsHamburguer : productsHamburguesa })
    },
    productsPizza : (req,res) => {
        const productsPizza = productModel.pizza();
        res.render('./productos/productPizza',{productPizza : productsPizza})
    },
    productsPastas : (req,res) => {
        const productsPastas = productModel.pasta();
        res.render('./productos/productPastas',{pastas : productsPastas })
    },
    productsAsado : (req,res) => {
        const productsAsado = productModel.parrilla();
        res.render('./productos/productAsado',{asado : productsAsado })
    },
    productsBebidas : (req,res) => {
        const productsDrinks = productModel.bebidas();
        res.render('./productos/bebidas',{drink : productsDrinks })
    },
    shoppingCart : (req,res)=>{
        res.render('./productos/shopping-cart');
    }, 

}


module.exports = productController;