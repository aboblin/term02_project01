console.log('js loaded');
var pathList = document.getElementById("pathList");
var map = document.getElementById("worldMap");
var slider = document.getElementById("yearSlider");
var year = document.getElementById("yearValue");
var dotsData = {};
var countryNames = {};
var countryName = ["Austria","Hungary","Belgium","Bulgaria","Czechoslovakia","Denmark","Finland","France","Germany","Greece","Ireland","Italy","Netherlands","Norway","Sweden","Poland","Portugal","Romania","Russia","Spain","Switzerland","United Kingdom","Yugoslavia","China","Hong Kong","India","Iran","Israel","Japan","Jordan","Korea","Philippines","Syria","Taiwan","Turkey","Vietnam","Canada","Mexico","Cuba","Dominican Republic","Haiti","Jamaica","Belize","Costa Rica","El Salvador","Guatemala","Honduras","Nicaragua","Panama","Argentina","Bolivia","Brazil","Chile","Colombia","Ecuador","Guyana","Paraguay","Peru","Suriname","Uruguay","Venezuela","Egypt","Ethiopia","Liberia","Morocco","South Africa","Australia","New Zealand"];
var countryXCor = [515,529,488,545,517,501,547,482,505,536,453,511,491,500,523,530,452,545,601,465,498,470,522,760,824,697,628,572,864,577,833,816,582,814,575,778,259,189,257,277,273,258,226,240,225,222,233,237,248,290,294,330,272,270,256,310,317,265,319,318,293,558,584,448,460,541,852,951];
var countryYCor = [312,314,299,331,303,271,233,313,293,342,286,331,290,242,227,290,342,318,261,338,314,288,322,354,329,396,368,372,354,372,353,414,359,396,345,427,304,396,402,409,408,412,415,435,425,420,421,427,440,572,511,492,577,453,466,448,535,494,451,560,441,386,438,445,369,551,533,603];
var stats;
var finalstats = [];
var circles;

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
	}
    });
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
    //d3.select("#yearSlider").attr("value", year);;
    //d3.select("#yearValue").html(year);
    stats = dotsData[getIndex(year)];
    //console.log(stats);
    for (var i = 0; i < stats.length; i++){
	while (stats[i] > 0){
	    finalstats.push([i, countryXCor[i], countryYCor[i]]);
	    stats[i] -= 1;
	}
    }
    //console.log(finalstats);
    circles = d3.select("svg").selectAll("circle").data(finalstats).enter();
    var stuff = circles.append("circle")
	.attr("cx", function(d){return d[1]})
	.attr("cy", function(d){return d[2]})
	.attr("r", 5)
	.attr("fill", "lightsteelblue");
    
    d3.selectAll("circle").transition().duration(10000)
	.delay(function(d,i){//console.log(d);console.log(100*i);
			     return 100*i;})
	.attr("cx", 200)
	.attr("cy", 344);

    var format = d3.format("d");

    if (year < 2010){
	d3.select("#yearValue")
	    .transition()
            .duration(10000)
            .on("start", function repeat() {
		d3.active(this)
	            .tween("text", function() {
			var that = d3.select(this),
			    i = d3.interpolateNumber(that.text().replace(/,/g, ""), year + 10);
			return function(t) { that.text(format(i(t))); };
		    })
	    });
	//makeDotsFromData( year + 10 );
    }
    else{
	d3.select("#yearValue")
	    .transition()
            .duration(10000)
            .on("start", function repeat() {
		d3.active(this)
	            .tween("text", function() {
			var that = d3.select(this),
			    i = d3.interpolateNumber(that.text().replace(/,/g, ""), year + 1);
			return function(t) { that.text(format(i(t))); };
		    })
	    });
	//makeDotsFromData(year+1);
    }
    //d3.select("#yearSlider").transition().duration(10000).attr( "value", year + 10 );
    var move = setInterval(function(){d3.select("#yearSlider").property("value", year = year+1);}, 1000);
    setTimeout(function(){clearInterval(move);}, 10000);
    /*
      console.log(d3.select("#yearSlider").attr('value'));
      if( year < 2013 ) {
	  makeDotsFromData( year + 10 );
      };
    */
};

yearValue.innerHTML = slider.value;

slider.oninput = function() {
    yearValue.innerHTML = this.value;
};

var intYear = 1810;

//*****FIX THIS. ONLY NEED TO AUTOMATE NOW*****
//setInterval(makeDotsFromData(intYear = intYear+10), 10000);
//setInterval(function(){makeDotsFromData(1830);}, 10000);
