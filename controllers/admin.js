const Product = require('../models/product');


exports.getAddProduct = (req, res, next)=>{
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    //This is absolute path from OS if we do not use path module and path join, path.join returns a absolute path to this folder where this file is located. It creates 
    //path by concatenate different parameter from its argument. DO not use '/' as it will take of it automatically. 

    // Instead of sendFile we will render it
    res.render('admin/edit-product', {
        pageTitle: 'Add Product', 
        path: '/admin/add-product',
        editing: false
    });
    //the thir parameter is for checking the condition in layouts/main-layout.pug
    //The 4th param hasProducts is for handlebar conditional rendering. Because in Handlebars
    //we cannot put any logic we can just check the value of the logic we put here.  
}

exports.postAddProduct = (req, res, next)=>{
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price; 
    const description = req.body.description; 


    // console.log(req.body); 
    // products.push({title: req.body.title});
    //we moved the above logic to the models and created a class and crated a object of the Product here
    const product = new Product(title, imageUrl, description, price);
    
    product.save();
    res.redirect('/')
};


exports.getEditProduct = (req, res, next) => {
    const editMode = req.query.edit; //undefined is treated as false 
    if (!editMode) {
      return res.redirect('/');
    }
    const prodId = req.params.productId;
    Product.findById(prodId, product => {
      if (!product) {
        return res.redirect('/');
      }
      res.render('admin/edit-product', {
        pageTitle: 'Edit Product',
        path: '/admin/edit-product',
        editing: editMode, //editing: true
        product: product
      });
    });
  };

exports.postEditProduct = (req, res, next) =>{
  
};


exports.getProducts = (req, res, next)=>{
   
    Product.fetchAll( products => {
    
    res.render('admin/product-list', {
        prods: products, 
        pageTitle: "Admin Products", 
        path: '/admin/product-list', 
    });
    
    });
};