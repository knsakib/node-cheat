const fs = require('fs');

const requestHandler = (req, res) =>{

  const url=req.url;
  const method=req.method;

  if (url==='/'){
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<h1>Enter The Username</h1>');
    res.write('<body><form action="/create-users" method="POST"><input type="text" name="username"><button type="submit">Create</button></form></body>');
    res.write('</html>');
    return res.end();
  }

  if (url==='/users'){
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<h1>The List of Users</h1>');
    res.write('<body><ul><li>user1</li><li>user2</li><li>user3</li></ul></body>');
    res.write('</html>');
    return res.end();
  }

  if (url==='/create-users' && method==='POST'){
        const  body = [];

        req.on('data', (chunk)=>{
          console.log(chunk);
          body.push(chunk);
        });

        return req.on('end',()=>{

            const parsebody = Buffer.concat(body).toString()
            console.log(parsebody);
            const user= parsebody.split('=')[1];

            res.statusCode=302;
            res.setHeader('Location', '/users');
            return res.end();

        });
  } //POST

};

module.exports=requestHandler;
