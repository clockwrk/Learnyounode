var fs = require('fs');

var  buff=fs.readFileSync(process.argv[2]);

var strings = buff.toString();

console.log(strings.split('\n').length-1);