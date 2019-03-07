const http=require('http');

const server = http.createServer((req, res)=>{
  console.log(req.url, req.method, req.headers);
  res.setHeader('Content-Type', 'text/html');
  //we tell the server what is the content type
  res.write('<html>');
  res.write('<h1>Node Server</h1>');
  res.write('</html>');
  res.end();
  //respond ends. We can write anything in the response after this. After this it will comeback to the server from the browser
});

server.listen(3000);
