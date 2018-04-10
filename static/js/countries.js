console.log('js loaded');
svg = document.getElementById("worldMap");
pathList = document.getElementById("pathList");

var colorCountry = function(countryName){
	countryPath = "null"

	var i;

	console.log(pathList.childNodes[1].getAttribute("title"));	

	for (i=1;i < 351; i++){
		//if (pathList.childNodes[i].getAttribute("title")==countryName){
		//	countryPath=pathList.childNodes[i];
		//}
		console.log(pathList.childNodes[i].getAttribute("title");
	}	
	
}
