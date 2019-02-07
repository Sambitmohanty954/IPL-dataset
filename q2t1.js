var path = require('./extractingCSV.js');
var res = path.extract('./matches.csv');
var obj = {}
res.map(function(i){
	if((obj.hasOwnProperty(i['winner']) === false) && (i['result'] === 'normal')){
		obj[i['winner']] = {}
		obj[i['winner']][i['season']] = 1
	}else if(i['result'] === 'normal'){
		if(obj[i['winner']].hasOwnProperty([i['season']])=== false)
		{
			obj[i['winner']][i['season']] = 1
		}
		obj[i['winner']][i['season']]+= 1
	}
})
console.log(obj)