// const products = [];
const fs = require('fs');
const path =  require('path');

const p = path.join(
            path.dirname(process.mainModule.filename), 
            'data', 
            'products.json'
            );


const getProductsFromFile = (cb) => {
    
        fs.readFile(p, (err,fileContent) => { 
            if (err){
                return cb([]);
            } else{
                cb(JSON.parse(fileContent));

            }
        });
};


module.exports = class Product {
    constructor(title, imageUrl, description, price){
        this.title =  title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;

    }

    save(){
        //we are adding a new propertry to our product model. So, when we save it 
        //we will have a unique product ID. this will be used to retrive a specific 
        //product data to edit or delete by admin.
        this.id=Math.random().toString();


        // products.push(this); this is for array 
        getProductsFromFile(products => {
            products.push(this);
                fs.writeFile(p, JSON.stringify(products), (err)=>{
                    console.log(err);
                });
        });
    }

    static fetchAll(cb){
        //we put static so that it can be only called from class itself
        //not from the instance that is initiated from the instance 
        //of the class
        
        getProductsFromFile(cb);
    }

    static findById(id, cb){
        getProductsFromFile(products=>{

            //it will return the product if it matched our id we supplied
            const product = products.find(p => p.id === id);
            
            //it is synchronous function, we added cb just after we fetched the product
            cb(product);
        });
    }

};