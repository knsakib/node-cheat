const http=require('http');
const fs = require('fs');

const server = http.createServer((req, res)=>{
  const url=req.url;
  const method=req.method;
  //we are reading the infoirmation of the request and route the request based on that
  if (url==='/'){
  //'===' means if both type(here it is string) and value matched
  res.setHeader('Content-Type', 'text/html');
  //we tell the server what is the content type
  res.write('<html>');
  res.write('<head><title>Enter Message</title></head>');
  res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
  //GET request is default and automatic. But for POST request, we/client should send the request to the server using form or javascipt. It will also sends some other
  //data with input text, for example name(here it is message)
  res.write('</html>');
  return res.end();
  //it will quite the function after here as it is a return statement. because we dont want to move next
}
//if the request method is GET in the request url, there is no '/message', then the follwing code runs
if (url==='/message' && method==='POST'){
  const  body = []; //data reference
  req.on('data', (chunk)=>{
    //We want to get the req data before we want to do anythig with it. We do that by registering an event listener by using 'on' method. 'on' allow us to listen certain events.
    //here we wnat to listen to data event.
    //data event will fired when a buffer is ready to be read. The second arg of 'on' method will executed for every data event. This is ()=>{} function. And the chunk
    //is simply data chunk we received.
    console.log(chunk);
    body.push(chunk);
  })
  req.on('end',()=>{ //end listener will be fired when all the data will be parsed.
    const parsebody = Buffer.concat(body).toString() //Buffer object is avilable globally by node.js
    //incming/request data is sent as stream of data. And this data is read by chunks. if the data is longer for exmple, file upload this data is sent by chunks
    //Buffer is construct to some some chuks of data that will allow us to work on the data, the full set of data reaches
    console.log(parsebody); //console @line 25 is a chunk. and this one is 'data chunk'.
    const message= parsebody.split('=')[1];
    //when we create server it implecitely creates a event listener for us, for exmple on method
    fs.writeFileSync('message.text', message);
  });


  res.statusCode=302;
  res.setHeader('Location', '/');
  //it is redirected to '/' and This is how we REDIRECTED the request to localhost
  return res.end();
  //302 is for redirect
}
res.setHeader('Content-Type', 'text/html');
res.write('<html>');
res.write('<head><title>After Posting the Message</title></head>');
res.write('<body><h1>Page after receiving the POST request!</h1></body>');
res.write('</html>');
res.end();
});

server.listen(3000);
