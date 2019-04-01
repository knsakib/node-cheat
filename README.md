# node-cheat

### Redering Data using  Templating Engine 
```
We can Pug, Ejs or Handlebars
we will using app.set. It is to set a 
globally configured key value across the app. 
For template engine we will use view engine key
and render template name as value. 
```

### Where to render
```
For Example, instead of res.sendFile method in shop.js
line 10, we will use res.render method (in line 16).
We need pass keyname as second parameter to send dynamic 
data and render it to template. 
```

### handlebars Philosophy
```
Te cannot put any logic we can just check the value of the logic we put here. 
This is in a sense good because in that case we are forced to put logic
in our node.js where it should be and template engine will be used only
for rendering purpose.  
```

