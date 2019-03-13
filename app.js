const http=require('http');

const express = require(express);

const app = express();
//express execute a function that is initializing 'app' onject 

const server = http.createServer(app);
//app object is also a request handler 
//express will give a middleware functionality that we can plug into express
//middleware means an incoming request is automatically funnelled through some series of functions until at the end we send the resposne  

server.listen(3000);
