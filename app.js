const express = require('express');
const bodyParser=require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
//this body Parser middleware automatically call next, so that it will go to all the next url handler middlewares after request parsing
//This parser will parse only post request using form submit
  
app.use('/add-product', (req, res, next)=>{
    res.send('<form action="/product" method="POST"><input type="text" name="title" /><button type="submit">Add Product</button></form>')
});

app.post('/product', (req, res, next)=>{
    console.log(req.body);
    //it will automatically parse the body. To do this, we need to regsiter a parser called body perser. It is a 3rd party library middleware which we register @line6 
    res.redirect('/')
});
//Now this will only work for post request where as app.use will work for both get and post 
//similarly app.get will work only for get request 
//so, if we put in the browser that /product it will go to / because going to /product is GET request 
//But if we submit form to /product, it is a get request and it will be handled(parsing the request) at that path 

app.use('/', (req, res)=>{
    res.send('<h1>Main Section</h1>')
});

app.listen(3000);
