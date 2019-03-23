const express = require('express');
const bodyParser=require('body-parser');
const path = require('path');

const app = express();

const adminRoutes =  require('./routes/admin');
const shopRoutes =  require('./routes/shop');
const rootDir = require('./util/path'); 

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
// serving static files (for example css files). we should treat like we are already static i.e. public folder when we link this files
// for example link style in html files 


app.use('/admin', adminRoutes);
//we want to make all the adminRoutes under /admin path. So we can do this here like this. We need not to define this prefix /admin/ path in app.use, get or post
//in the admin.js. However, as the path is now /admin/ we should update the form action in admin.js

app.use(shopRoutes);
//we can use admminRoutes or shopRoutes as middlewares
//In general here the order of app.us matters. But here in specific it does not matter even we switch the order as we use only router.get in shop.js
//Because router.get makes sure that this is exact path. If we switched and used router.use in shop then it will always end up shop first even if we go to 
// other routes, which we do not want.
//So GET request also resembles exact path. That is why if we used other path, it will not end up / as defined in shop rather will give and error, 'can not get...'

app.use((req, res, next)=>{
    res.status(404).sendFile(path.join(rootDir, 'views', 'page-not-found.html'));
})
//Deafult path is '/', so we need not mention. It will work all the not defined path 

app.listen(3000);
