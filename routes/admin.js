const path = require('path');
const express = require('express');

const rootDir = require('../util/path'); 
const router = express.Router();
//This will create a similar instance/object of express like app object. We can use router instead of app in the routing operation

router.get('/add-product', (req, res, next)=>{
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    //This is absolute path from OS if we do not use path module and path join, path.join returns a absolute path to this folder where this file is located. It creates 
    //path by concatenate different parameter from its argument. DO not use '/' as it will take of it automatically. 

});

router.post('/add-product', (req, res, next)=>{
    console.log(req.body); 
    res.redirect('/')
});

//The GET and POST methods are different so these are two different routes 

module.exports=router;