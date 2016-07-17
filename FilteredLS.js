var fs = require('fs');
var path = require('path');
var filtered = [];


fs.readFile(process.argv[2], "utf8", process.argv[3], function callback(err, data){
	var ext=process.argv[3];
 	for(k in data){
 
 		 	if("."+ext===path.extname(data[k])){
 		filtered.pop(data[k]+"\n");
 		}
 	}
});

console.log(filtered);
