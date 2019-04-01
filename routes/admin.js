const path = require('path');
const express = require('express');

const rootDir = require('../util/path'); 
const router = express.Router();
//This will create a similar instance/object of express like app object. We can use router instead of app in the routing operation

const products = [];

router.get('/add-product', (req, res, next)=>{
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    //This is absolute path from OS if we do not use path module and path join, path.join returns a absolute path to this folder where this file is located. It creates 
    //path by concatenate different parameter from its argument. DO not use '/' as it will take of it automatically. 

    // Instead of sendFile we will render it
    res.render('add-product', {pageTitle: 'Add Product', path: '/admin/add-product'})
    //the thir parameter is for checking the condition in layouts/main-layout.pug
    //The 4th param hasProducts is for handlebar conditional rendering. Because in Handlebars
    //we cannot put any logic we can just check the value of the logic we put here.  
});

router.post('/add-product', (req, res, next)=>{
    // console.log(req.body); 
    products.push({title: req.body.title});
    res.redirect('/')
});

//The GET and POST methods are different so these are two different routes 

// module.exports=router;

exports.routes = router; 
exports.products = products;
//we used a little different syntax as we want to export both router and products 