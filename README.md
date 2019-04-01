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

### Pug Layout to maintain Common Layouts 
```
To maintain common layouts we created layouts/main-layout
where we can include the common template sections. We can do
this by including 'block' keyword in the common layout section. 
Where we can insert extended or dynamic content when we are 
using this common layout in the other layout temnplate. 
```

### Show differently in the common layout based on rendering differently
```
Fot this we inluded a 3rd param 'path' in line 16 of app.js. 
Then we use that condition in main-layout. 
```

