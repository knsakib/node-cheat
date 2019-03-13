const http=require('http');

const express = require('express');

const app = express();
//express execute a function that is initializing 'app' onject 

const server = http.createServer(app);
//app object is also a request handler 
//express will give a middleware functionality that we can plug into express
//middleware means an incoming request is automatically funnelled through some series of functions until at the end we send the resposne  

app.use((req, res, next)=>{
    console.log('In the middleware');
    next();
    //next will alow the request to travel to next middleware
    //middleware will flow through top to bottom
});

app.use((req, res, next)=>{
    console.log('In another middleware');
    res.send("<h1>Blah!</h1>")
    //send is utility function comes from express. By this we can send a request body 
    //By deafult text tyoe is html 
    
});

server.listen(3000);
