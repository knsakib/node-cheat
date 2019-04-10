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
    constructor(t){
        this.title =  t;

    }

    save(){
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

};