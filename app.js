const express = require('express');
const bodyParser=require('body-parser');
const path = require('path');
// const expressHbs=require('express-handlebars');
//Handlebars is not automatically register or included in express
//we need to import it manually  

const app = express();


// app.engine('hbs', expressHbs({layoutsDir: 'views/layouts/', defaultLayout: 'main-layout', extname:'hbs'}));
//Handlebars is not automatically register or included in express
//we need to import it manually  
// app.set('view engine', 'hbs');
//layoutsDir and main-layout is to specify if location and files are different than default 

//ejs
app.set('view engine', 'ejs');


//pug:
//app.set('view engine', 'pug');
//this is to set the template. The value pug works automatically 
//here as this template engine ships with built-in expres support and 
//auto register itself with express.  
app.set('views', 'views');
//this is to where to find the template. the deafult settings is view
//folder. So if we keep the template in view folder it may not 
//need to tell again. this is for if we put template in different 
//folder.  


const adminRoutesAndData =  require('./routes/admin');
const shopRoutes =  require('./routes/shop');
const rootDir = require('./util/path'); 

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
// serving static files (for example css files). we should treat like we are already static i.e. public folder when we link this files
// for example link style in html files 


app.use('/admin', adminRoutesAndData.routes);
//we want to make all the adminRoutes under /admin path. So we can do this here like this. We need not to define this prefix /admin/ path in app.use, get or post
//in the admin.js. However, as the path is now /admin/ we should update the form action in admin.js

app.use(shopRoutes);
//we can use admminRoutes or shopRoutes as middlewares
//In general here the order of app.us matters. But here in specific it does not matter even we switch the order as we use only router.get in shop.js
//Because router.get makes sure that this is exact path. If we switched and used router.use in shop then it will always end up shop first even if we go to 
// other routes, which we do not want.
//So GET request also resembles exact path. That is why if we used other path, it will not end up / as defined in shop rather will give and error, 'can not get...'

app.use((req, res, next)=>{
    // res.status(404).sendFile(path.join(rootDir, 'views', 'page-not-found.html'));
    res.status(404).render('page-not-found', {pageTitle: 'Page Not Found', path: ''});
})
//Deafult path is '/', so we need not mention. It will work all the not defined path 

app.listen(3000);