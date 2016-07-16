//console.log(process.argv);

var itemsInArgv=[];
var items=process.argv;
var sum=0;

for(k in items){
	if(!isNaN(Number(items[k]))){
		sum+=Number(items[k]);
	}
}
console.log(sum);
return sum;
