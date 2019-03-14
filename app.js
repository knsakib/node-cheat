const express = require('express');
const bodyParser=require('body-parser');

const app = express();

const adminRoutes =  require('./routes/admin');
const shopRoutes =  require('./routes/shop');

app.use(adminRoutes);
app.use(shopRoutes);
//we can use admminRoutes or shopRoutes as middlewares
//In general here the order of app.us matters. But here in specific it does not matter even we switch the order as we use only router.get in shop.js
//Because router.get makes sure that this is exact path. If we switched and used router.use in shop then it will always end up shop first even if we go to 
// other routes, which we do not want.
//So GET request also resembles exact path. That is why if we used other path, it will not end up / as defined in shop rather will give and error, 'can not get...'

app.use(bodyParser.urlencoded({extended: false}));

app.listen(3000);
