var fs = require('fs');
var strings="";
fs.readFile(process.argv[2], function callback(err, data){
 if (err) console.log("Error occured")
 	strings = data.toString();
});

console.log(strings.split('\n').length-1);