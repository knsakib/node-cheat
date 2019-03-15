const path = require('path');
const express =  require('express');

const router = express.Router();

router.get('/', (req, res, next)=>{
    res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
    //This is absolute path from OS if we do not use path module and path join, path.join returns a absolute path to this folder where this file is located. It creates 
    //path by concatenate different parameter from its argument. DO not use '/' as it will take of it automatically. 

});

module.exports=router;
