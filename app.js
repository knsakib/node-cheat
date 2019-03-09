const http=require('http');

const routes=require('./routes');

const server = http.createServer(routes);
//we created the routes module and we imported here.
//Then we pass it to http.createServer
//We just reference the function we are not executing here, telling that please execute for incoming request  

server.listen(3000);
