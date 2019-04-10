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

### Sperating Models
```
We will define single entiry product class as model and
use the instance of it to communicate with views. When we 
create product we create the instance of the product
and when we fetch we will use static featchAll method of the
class to fetch all the products.   
```

### Saving Models to a File
```
Instead of saving models to a varaible we want to save it
in a file. We will read and write from data/products.json  
```

### fetchAll return issue
```
fetchAll in models/product does not 
return anything. That is why in the 
view shop.ejs file, when it tries to access the length of
the product, we get an error 
"Cannot read property 'length' of undefined".
We resolved this by passing call back function as
a arg of fetchAll(). This will execute when featchAll is
done. fetchAll() will in fact call fs.readFile
will is asynchrnous, we do not really know when this will
be done. Now in my controller where I call fetchAll, there
we just need to pass a function where we will eventually get 
the products and render it to shop.ejs. Now we just call 
the fetchAll function when all the products have
been fetched. 
Put a [] in products.json to start with. 
```