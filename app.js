const express = require('express');

const app = express();
  
app.use('/', (req, res, next)=>{
    console.log('This is the First Middleware middleware');
    next();
});

app.use('/', (req, res, next)=>{
    console.log('This is the Second Middleware middleware');
    next();
});

app.use('/users', (req, res, next)=>{
    res.send('<h1>User Section</h1>')
});

app.use('/', (req, res)=>{
    res.send('<h1>Main Section</h1>')
});

app.listen(3000);
