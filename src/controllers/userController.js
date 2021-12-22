const fs = require('fs');
const path = require('path');

// ESTO SERIA EL GESTOR DEL MODELO

const jsonDB = require('../model/jsonDatabase');

// Maneja todos los métodos para PRODUCTO, que lo pasa como parámetro
const productModel = jsonDB('products');

const userController = {
    
    login: (req, res)=> {
        res.render('./users/login');
    },

    register: (req, res)=> {
        res.render('./users/register');
    },

    
};

module.exports = userController;