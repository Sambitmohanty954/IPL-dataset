var path = require('./extractingCSV.js');
var result = path.extract('./matches.csv');

	var myObj = {};
	for(var i in result){ 
		if(myObj.hasOwnProperty(result[i]['winner'])){
		myObj[result[i]['winner']]+= 1
		}
		else{
			myObj[result[i]['winner']]=1	
		}
	}
console.log(myObj)

