var countryID = ["#AT","#HU","#BE","#BG","#CZ","#DK","#FI","#FR","#DE","#GR","#IE","#IT","#NL","#NO","#SE","#PL","#PT","#RO","#RU","#ES","#CH","#GB","#HR","#CN","#LA","#IN","#IR","#IL","#JP","#JO","#KR","#PH","#SY","#TW","#TR","#VN","#CA","#MX","#CU","#DO","#HT","#JM","#BZ","#CR","#SV","#GT","#HN","#NI","#PA","#AR","#BO","#BR","#CL","#CO","#EC","#GY","#PY","#PE","#SR","#UY","#VE","#EG","#ET","#LR","#MA","#ZA","#AU","#NZ"]

var countryColors = ["#ad132a","#fa940e","#edc332","#52b008","#1f6c07","#739fed","#0e0a5b","#6a1252","#bd71b5","#fca9b9"]

var info = getData();

var colors = function(){
    for (var i = 0; i < 10; i++){
	var c = d3.selectAll(countryID[i]);
	c.attr("color",1);
    }
    for (var i = 10; i < countryID.length; i++){
	var c = d3.selectAll(countryID[i]);
	c.attr("color",0);
    }
    for (var i = 0; i < countryID.length; i++){
	var c = d3.selectAll(countryID[i]);
	if (c.attr("color") == 1){
	    c.style("fill","#7e416a");
	}
	else if (c.attr("color") == 0){
	    c.style("fill","gray");
	}
    }
}

var setBaseColor = function(){
    for (var i = 0; i < countryID.length; i++){
	var c = d3.selectAll(countryID[i]);
	c.attr("color",0);
    }
}

var getMax = function(info){
    var max = 0;
    for (var i = 0; i < info.length; i++){
	if (info[i] > max){
	    max = info[i];
	}
    }
    return max;
}

var getMedian = function(info){
    var arr = info.slice(0);
    var i = arr.length;
    while (i--){
	if (arr[i] == 0){
	    arr.splice(i,1);
	}
    }
    arr.sort( function(a,b) {return a - b;});
    var half = Math.floor(arr.length/2);

    if (arr.length % 2){
	return arr[half];
    }
    else{
	return (arr[half-1] + arr[half]) / 2.0;
    }
}

    
var setColors = function(year){
    stats = dotsData[getIndex(year)];
    console.log(stats);
    setBaseColor();
    var max = getMax(stats);
    var median = getMedian(stats);
    for (var i = 0; i < stats.length; i++){
	var c =d3.selectAll(countryID[i]);
	console.log(c.attr("color"));
	if (stats[i] > 0){
	    c.attr("color",1);
	}
    }
    for (var i = 0; i < stats.length; i++){
	var c = d3.selectAll(countryID[i]);
	var col = i%10;
	console.log(c.attr("color"));
	if (c.attr("color") == 1){
	    if (stats[i] >= median){
		c.transition().duration(5000).style("fill-opacity",0.5).style("fill",countryColors[col]);
	    }
	    else{
		var op = (((stats[i] / max)/2)+0.5);
		c.transition().duration(5000).style("fill-opacity",op).style("fill",countryColors[col]);
	    }
	}
	else{
	    console.log("reverting");
	    c.transition().duration(1000).style("fill-opacity",1).style("fill","#CCCCCC");
	}
    }
}
