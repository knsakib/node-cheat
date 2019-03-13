const express = require('express');

const app = express();
//express execute a function that is initializing 'app' onject 
//app object is also a request handler 
//express will give a middleware functionality that we can plug into express
//middleware means an incoming request is automatically funnelled through some series of functions until at the end we send the resposne  

app.use('/', (req, res, next)=>{
    console.log('This middleware always runs');
    next();
});

app.use('/add-product', (req, res, next)=>{
    console.log('In the middleware');
    res.send('<h1>Product Blah!</h1>')
});

app.use('/', (req, res, next)=>{
    console.log('In another middleware');
    res.send('<h1>Hello Blah!</h1>')
});
// We should put as a last middle for routing as this is for '/'

// const http=require('http');
// const server = http.createServer(app);
// server.listen(3000);
//all the three lines above equal to 

app.listen(3000);
