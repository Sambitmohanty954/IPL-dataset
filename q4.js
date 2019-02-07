var path = require('./extractingCSV.js');
var data = path.extract('./deliveries.csv');
var result = path.extract('./matches.csv');

function mapEconomy()
{
	var matchesID = []
	var graphData = {}
	var topEconomies = []
	
	matchesID = result.filter((item) => { return item['season'] == 2015}).map((i) => {return i['id']})
	data = data.filter((item) => 
	{
		return(matchesID.indexOf(item["match_id"]) !== -1)			
	})
	data.map((item,index) => {
		if(!graphData.hasOwnProperty(item['bowler']))
		{
			runsConceded = parseInt(item['total_runs']) - parseInt(item['bye_runs']) - parseInt(item['legbye_runs']) - parseInt(item['penalty_runs'])
			graphData[item['bowler']] = {'runs' : runsConceded, 'overs' : 0}
		}
		else
		{
			runsConceded = parseInt(item['total_runs']) - parseInt(item['bye_runs']) - parseInt(item['legbye_runs']) - parseInt(item['penalty_runs'])
			if(index === data.length-1)
			{
				graphData[item['bowler']]['overs'] = graphData[item['bowler']]['overs'] + 1
			}
			else if(data[index+1]['bowler'] !== item['bowler'])
			{
				graphData[item['bowler']]['overs'] = graphData[item['bowler']]['overs'] + 1
			}
			graphData[item['bowler']]['runs'] = graphData[item['bowler']]['runs'] + runsConceded
		}
	})
	
	for (var elem in graphData)
	{
		var economy = graphData[elem]['runs'] / graphData[elem]['overs']
		topEconomies.push([elem,economy])	 
	}
	topEconomies.sort((a,b) => {return a[1] - b[1]})
	topEconomies = topEconomies.splice(0,10)
	graphData = {}
	topEconomies.map((item , index) => {graphData[item[0]]= item[1]})
	return graphData
}

console.log(mapEconomy())

//