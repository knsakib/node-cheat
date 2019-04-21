// const products = [];
//we moved it to the models where we defined products and 
//import the instance of the that class

const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getProducts = (req, res, next)=>{
    // console.log(adminData.products);
    // const products = adminData.products;
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    //This is absolute path from OS if we do not use path module and path join, path.join returns a absolute 
    //path to this folder where this file is located. It creates 
    //path by concatenate different parameter from its argument. DO not use '/' as it will take of it automatically. 

    //In the above code to render a template instead of sending html file we will render the file as follows
    Product.fetchAll( products => {
        //we used the static method to fetch the product
    //because here we dont want to create new product. 
    // heer we want to fetch all the product
    res.render('shop/product-list', {
        prods: products, 
        pageTitle: "All The Products", 
        path: '/product-list', 
    });
    // the thris avriable 'path' is added to check the condition in the main-layout and render
    //different content based on the path
    });
};

exports.getProduct = (req, res, next) => {
    const prodId = req.params.productId;
    // we used productId in request pamameter
    console.log(prodId);
    Product.findById(prodId, product => {
        console.log(product);
        res.render('shop/product-detail', {
            product: product, 
            pageTitle: product.title,
            path: '/products'
        });
    });
    // res.redirect('/');
};

exports.getIndex = (req, res, next)=>{
    
    Product.fetchAll( products => {
   
        res.render('shop/index', {
            prods: products, 
            pageTitle: "My Shop", 
            path: '/', 
        });
    
    });
};

exports.getOrders = (req, res, next)=>{
    res.render('shop/orders', {
        pageTitle: "Your Orders", 
        path: '/orders', 
    });
};

exports.postCart = (req, res, next) => {
    const prodId =  req.body.productId;
    console.log(prodId);
    Product.findById(prodId, product => {
        Cart.addProduct(prodId, product.price); 
    });
    res.redirect('/cart');
};

exports.getCart = (req, res, next)=>{
    res.render('shop/cart', {
        pageTitle: "Your Cart", 
        path: '/cart', 
    });
};


exports.getCheckout = (req, res, next)=>{
    res.render('shop/checkout', {
        pageTitle: "Checkout", 
        path: '/checkout', 
    });
};