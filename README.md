# node-cheat

### Redering Data using  Templating Engine 
```
We can Pug, Ejs or Handlebars
we will using app.set. It is to set a 
globally configured key value across the app. 
For template engine we will use view engine key
and render template name as value. 
```

### MVC
```
Models: Objects tha is resposnible to represent the data. 
For example, fetching, saving data. Memory, databases 
falls under this. 

Views: Views are responsible for rendering views/html etc. 
templating engine falls unbder this. 

Controllers: The connection point between models and views. 
Views should not care about the application logic. Model
cares about data. So, Controllers works in between for
example, after saving/fetching the data it will then 
pass that to views. Routes falls under this.    
```

### Sperating controllers
```
We want to separate the controller now which is 
now embeded in the route. for example, if 
router.get(sth), then res.render(sth). So,
we took (req, res, next)=>{ } from admin.js
route and put inside the controllers/product.js
we exported the function there and then will 
import the function in routes/admin.js
```