console.log('js loaded');
var pathList = document.getElementById("pathList");
var dotsData = {};
var countryNames = {};

var colorCountry = function(countryName,theColor){
    var countryPath = "null"

    var i;

    for (i=1;i < 351; i+=2){
	pathElement = pathList.childNodes[i];
	title = pathElement.getAttribute("title");
	if (title == countryName){
	    countryPath = pathElement;
	}
    }	

    countryPath.style.fill = theColor;
    return(countryPath);    
};

var getData = function(){
    $.ajax({
	url: "/getData",
	type: "GET",
	data: {},
	success: function(d){
	    dotsData = d.dotdata;
	    countryNames = d.countries;
	    console.log(d);
	}
    });
    //console.log("hello");
};



var getIndex = function(year){
    /*
      subtract 1820
      divide by 10
      add 1
    */
    var index = 0;
    if (year >= 2011){
	index = year - 1990;
    }
    else{
	index = Math.floor((year - 1820) / 10) + 1;
    }
    return index;
};

var makeDotsFromData = function(year){
    var data = dotsData[getIndex(year)];
    console.log(data);
    for (var i = 0; i < data.length; i++){
	data[i] = [data[i], "[cx]", "[cy]"]
	console.log(data[i]);
    }
    //console.log(countryNames);
};

//doesnt work
var getCx = function(){
    var ans = [];
    var countryPath = "null"

    var i;

    for (var j = 1; j < countryNames.length; j++){
	
	for (i=1;i < 351; i+=2){
	    pathElement = pathList.childNodes[i];
	    title = pathElement.getAttribute("title");
	    if (title == countryNames[j]){
		d = pathElement.getAttribute("d");
		d = d.match(/[a-zA-Z]+|[0-9]+/g);
		console.log(title);
		console.log(d);
	    }
	}	

    }

    return(ans);
};






getData();
