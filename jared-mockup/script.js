//data splicing --------------------------------------
//this creates names for the headers
var dataHeaders = Object.keys(tableData[0]);
//this creates an empty list for the data to go into
var dataFinal = [];

//this creates the objects for data to be inserted into once spliced by category, including empy list for colors
for (var x = 0; x < (dataHeaders.length + 1); x++){
  var temp = dataHeaders[x];
  var tempArray = `[]`;
  var tempJSON = JSON.parse(tempArray);
  dataFinal.push(tempJSON);
  }

// splices data into each category
for (var i = 0; i < tableData.length; i++){
  for (var x = 0; x < dataHeaders.length; x++){
    var temp = [dataHeaders[x]];
    dataFinal[x].push(tableData[i][temp]);
  }
}
//end data splicing ----------------------------------

//dynamically create random colors for charts.js chart
for(var i = 0; i < dataFinal[0].length; i++){
  	if(i == 0){
		var color1 = 253;
  		var color2 = 13;
  		var color3 = 110;
	}
	else if(i==1){
		var color1 = 253;
  		var color2 = 156;
  		var color3 = 13;
	}
	else if(i==2){
		var color1 = 13;
  		var color2 = 253;
  		var color3 = 156;
	}
	else if(i==3){
		var color1 = 13;
  		var color2 = 110;
  		var color3 = 253;
	}
	else{
  		var color1 = Math.round((Math.random()*256)-1);
  		var color2 = Math.round((Math.random()*256)-1);
  		var color3 = Math.round((Math.random()*256)-1);
  	}
  dataFinal[dataFinal.length - 1].push(`rgba(${color1}, ${color2}, ${color3}, 0.75)`);
}

/// data ^ /// chart \/

var ctx = document.getElementById('EC2Chart').getContext('2d');
ctx.height = '60vh';
var EC2Chart = new Chart(ctx, {
	type:'bar',
	data:{
		labels: dataFinal[0],
		datasets: [{
			label: dataHeaders[1],
			data:dataFinal[1],
			backgroundColor: dataFinal[dataFinal.length - 1],
            borderColor: dataFinal[dataFinal.length - 1],
            borderWidth: 1
		}]
	},
	scales: {
		x: {
			stacked:true
		},
		y: {
			stacked:true
		}
	},
    options: {
        maintainAspectRatio: false,
        scales:{
            yAxes: [{
                ticks:{
                    beginAtZero:true
                }
            }]
        }
    }
}
);