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

  fs.writeFileSync('message.text', 'DUMMY');
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
