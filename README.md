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

### EJS Rendering
```
When are importing partials we can use <%= %> to render it as text
instead of html to avoid CSRF attack. With <%- %> it will render it 
as HTML. If there is any variables in the partials it will work with
<%- %>
```