const path = require('path');

module.exports = path.dirname(process.mainModule.filename); 
//path.dirname returns the directory name of a path. There we use global process variable. Then we use Mainmodule which is reponsible for main process i.e. the app here 
//The we use filename method to get the filename name of the current file it will be imported   