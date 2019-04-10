// const products = [];
//we moved it to the models where we defined products and 
//import the instance of the that class

const Product = require('../models/product');

exports.getAddProduct = (req, res, next)=>{
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    //This is absolute path from OS if we do not use path module and path join, path.join returns a absolute path to this folder where this file is located. It creates 
    //path by concatenate different parameter from its argument. DO not use '/' as it will take of it automatically. 

    // Instead of sendFile we will render it
    res.render('add-product', {
        pageTitle: 'Add Product', 
        path: '/admin/add-product',
        productCSS: true,
        activeAddProduct: true
    });
    //the thir parameter is for checking the condition in layouts/main-layout.pug
    //The 4th param hasProducts is for handlebar conditional rendering. Because in Handlebars
    //we cannot put any logic we can just check the value of the logic we put here.  
}

exports.postAddProduct = (req, res, next)=>{
    // console.log(req.body); 
    // products.push({title: req.body.title});
    //we moved the above logic to the models and created a class and crated a object of the Product here
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/')
}

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
    res.render('shop', {
        prods: products, 
        pageTitle: "My Shop", 
        path: '/', 
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
    });
    // the thris avriable 'path' is added to check the condition in the main-layout and render
    //different content based on the path
    });
};

