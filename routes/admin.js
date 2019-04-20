const path = require('path');
const express = require('express');

const adminController = require('../controllers/admin');
//we imported the controller here

const rootDir = require('../util/path'); 
const router = express.Router();
//This will create a similar instance/object of express like app object. We can use router instead of app in the routing operation

router.get('/product-list', adminController.getProducts);

router.get('/add-product', adminController.getAddProduct);

router.post('/add-product', adminController.postAddProduct);

//The GET and POST methods are different so these are two different routes 

// module.exports=router;

// exports.routes = router; 
// exports.products = products;
//we used a little different syntax as we want to export both router and products 


module.exports=router;