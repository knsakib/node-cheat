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

router.get('/products/:productId', shopController.getProduct);
// if I have any other routes after products like /products/delete, 
//it should be put befpre /products/:productId as if we out 
//later it will never reach that route, rather should 404 page

router.get('/cart', shopController.getCart);

router.post('/cart', shopController.postCart);
//we are regsitering /cart post request

router.get('/orders', shopController.getOrders);

router.get('/checkout', shopController.getCheckout);





module.exports=router;
