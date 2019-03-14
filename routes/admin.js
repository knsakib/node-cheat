const express = require('express');

const router = express.Router();
//This will create a similar instance/object of express like app object. We can use router instead of app in the routing operation

router.get('/add-product', (req, res, next)=>{
    res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title" /><button type="submit">Add Product</button></form>')
});

router.post('/add-product', (req, res, next)=>{
    console.log(req.body); 
    res.redirect('/')
});

//The GET and POST methods are different so these are two different routes 

module.exports=router;