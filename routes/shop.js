const path = require('path');
const express =  require('express');

const productsController = require('../controllers/products');
//we imported the controller here

const router = express.Router();
// const rootDir = require('../util/path'); 
// const adminData = require('./admin'); 
//we do not need this anymore after we created controllers

router.get('/', productsController.getProducts);

module.exports=router;
