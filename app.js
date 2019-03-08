const http=require('http');
const fs = require('fs');

const server = http.createServer((req, res)=>{
  const url=req.url;
  
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
res.setHeader('Content-Type', 'text/html');
res.write('<html>');
res.write('<head><title>After Posting the Message</title></head>');
res.write('<body><h1>Page after receiving the POST request!</h1></body>');
res.write('</html>');
res.end();
});

server.listen(3000);
