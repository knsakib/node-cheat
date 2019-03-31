const path = require('path');
const express =  require('express');

const router = express.Router();
const rootDir = require('../util/path'); 
const adminData = require('./admin'); 

router.get('/', (req, res, next)=>{
    console.log(adminData.products);
    const products = adminData.products;
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    //This is absolute path from OS if we do not use path module and path join, path.join returns a absolute path to this folder where this file is located. It creates 
    //path by concatenate different parameter from its argument. DO not use '/' as it will take of it automatically. 

    //In the above code to render a template instead of sending html file we will render the file as follows
    res.render('shop', {prods: products, docTitle: "My Shop"});

});

module.exports=router;
