# node-cheat

### Why we did to serve css file by reference
```
We created a public folder to store and serve those files. We can not just any folder or files.
We need to explicitely tell the correspoding route to find by express to serve those files.
Because app can not just access the files system. But we made an exception to serve those 
style files.   
```

### What we did to serve css file
```
But we want to link some css files in style tag that is saved in the server. The way we link those 
files is by putting those files in the public folder and telling express to serve those statically
by allowing file system access only on that section/folder. Those will not be served as a route 
serving but servcing as a static file system using app.use(express.static()) middleware.  
```
