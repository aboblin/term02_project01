console.log('js loaded');
var svg = document.getElementById("worldMap");
var pathList = document.getElementById("pathList");
var data = {};
var index = 0;

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
	    data = d;
	    console.log(d);
	}
    });
    console.log("hello");
};

var getIndex = function(year){
    if (year <= 1839){
	index = 1;
    }
    else if (year <= 1849){
	index = 
    }
#does not work
#subtract 1830
#mod 10
#add 1
}

var makeDots = function(year){

}








//getData();
