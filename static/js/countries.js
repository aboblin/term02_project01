console.log('js loaded');
svg = document.getElementById("worldMap");
pathList = document.getElementById("pathList");

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

var getData= function(){
    $.ajax({
      url: "/getData",
	type: "GET",
	
      success: function(d){
      console.log(d);
      }
      });
    console.log("hello");
};

//getData();
