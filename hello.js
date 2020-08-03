console.log('Hello Node JS');
// in terminal prints console log

var os = require('os');
var message = 'This script is running on Node.js ' + process.version + ' on a ' + os.type() + '-based operating system.';
// process is defined in the application

console.log(message)
// This script is running on Node.js v12.18.3 on a Darwin-based operating system.

exports.sayHello = 'Hello From my Custom Module!';
