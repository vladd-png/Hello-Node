var custom = require('./hello.js');

console.log(custom.sayHello);
// Hello From my Custom Module!

var parser = require('node-markdown');
var html = parser.Markdown('Using markdown helps you focus on writing, not on markup');

console.log(html);
// <p>Using markdown helps you focus on writing, not on markup</p>

var boldText = parser.Markdown('This text will be **bold**');
console.log(boldText);
// <p>This text will be <strong>bold</strong></p>

var italicsText = parser.Markdown('This text will have *emphasis*');
console.log(italicsText);
<p>This text will have <em>emphasis</em></p>
