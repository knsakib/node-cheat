const path = require('path');
const express =  require('express');

const shopController = require('../controllers/shop');
//we imported the controller here

const router = express.Router();
// const rootDir = require('../util/path'); 
// const adminData = require('./admin'); 
//we do not need this anymore after we created controllers

router.get('/', shopController.getIndex);

router.get('/product-list', shopController.getProducts);

router.get('/cart', shopController.getCart);

router.get('/orders', shopController.getOrders);

router.get('/checkout', shopController.getCheckout);





module.exports=router;
