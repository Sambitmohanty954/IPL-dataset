var path = require('./extractingCSV.js');
var data = path.extract('./deliveries.csv');
var result = path.extract('./matches.csv');

var arr = []
for(var i in result){
	if(result[i]['season'] === '2016'){
		arr.push(result[i]['id'])
	}
}
var obj = {}
	for(var i = 0 ; i < data.length; i++){
		for(var j = 0 ; j < arr.length; j++){
		if(arr[j] === data[i]['match_id']){
			if(obj.hasOwnProperty(data[i]['bowling_team'])){
				obj[data[i]['bowling_team']]+= parseInt(data[i]['extra_runs'])
			}
			else{
				obj[data[i]['bowling_team']]= parseInt(data[i]['extra_runs'])
			}
		}
	}
}
console.log(obj)