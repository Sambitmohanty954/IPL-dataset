var path = require('./extractingCSV.js');
var result = path.extract('./matches.csv');

var res = []
var arr = []
for(var i in result){
	res.push(result[i]['season'])
}
for(var j in res){
	if(arr.indexOf(res[j]) === -1){
		arr.push(res[j])
	}
}
// console.log(arr)
var newArr = [];
for(var k in  arr){
	for(var l in result){
		if(arr[k] === result[l].season){
			newArr.push(result[l]['winner'])
		}
	}
//console.log(newArr)
	var uniqArr = []
for(var m in newArr){
	if(uniqArr.indexOf(newArr[m]) === -1){
		uniqArr.push(newArr[m])
	}
 }
 //console.log(uniqArr)
 var obj ={}
var count = 0;
for(var n in uniqArr){
	for(var i in newArr){
		if(uniqArr[n] === newArr[i]){
			count++
		}if(count !== 0){

			obj[uniqArr[n]] = count
		}
	}
 }
}
console.log(obj)
