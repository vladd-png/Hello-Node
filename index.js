var custom = require('./hello.js');

console.log(custom.sayHello);
// Hello From my Custom Module!

var parser = require('node-markdown');
var html = parser.Markdown('Using markdown helps you focus on writing, not on markup');

console.log(html);
// <p>Using markdown helps you focus on writing, not on markup</p>
