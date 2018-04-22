console.log("leaderboard loaded")
lBoardElemArray = []
for (var i=1;i<=5;i++){
	lBoardElem=document.getElementById("lBoard"+i.toString());
	lBoardElemArray.push(lBoardElem);
}




var getTopFiveList = function(){
	$.ajax({
		url:"/getTopFiveList",
		type:"GET",
		data:{},
		success: handleData
	});
	console.log("lboard");
}

leaderBoardList = "null"

var handleData = function(data){
	leaderBoardList = data;
	console.log(leaderBoardList);
}

getTopFiveList()
console.log("leaderBoardLoaded");
console.log(leaderBoardList)

slider = document.getElementById("yearValue");

var inputYearToIndex = function(yearNum){
	if (yearNum < 2010){
		workingYear = yearNum - 1820;
		workingYear = Math.floor(workingYear/10);
		return workingYear
	}
	else {
		workingYear = yearNum - 2010;
		return workingYear + 18
	}
	console.log('hi')
}


var yearUpdate = function(){
	
	var update = function(){
		var yearIndex = inputYearToIndex(parseInt(slider.innerHTML));
		console.log(leaderBoardList['results'][yearIndex][0]);
		for (var i=1;i<=5;i++){
			var subInString = leaderBoardList['results'][yearIndex][i-1];
			lBoardElemArray[i-1].innerHTML=i.toString()+". " + subInString;
		}
		
	}
	setInterval(update,250);
}

yearUpdate()
