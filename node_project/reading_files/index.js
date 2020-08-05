var dataFile = require('./data.json');

console.log(dataFile);
// { name: 'Virginia Ladd', address: 'Broomfield, Colorado' }
console.log(dataFile.name);
// Virginia Ladd



var fs = require('fs');
// fs = file system Module

fs.readFile('./other.txt','utf-8',(err, data) => {
  console.log(data);
  // name = Virginia Ladd, address = Broomfield
});
// format is: what file do you need,
// what format is it in
// and last what do you want to do with the file
// in this case either an error or data with a callback function

fs.readdir('../', (err, data) => {
  console.log(data);
  // [
  //   'index.js',
  //   'node_modules',
  //   'package-lock.json',
  //   'package.json',
  //   'reading_files'
  // ]
});
