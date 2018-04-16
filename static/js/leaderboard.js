console.log("leaderboard loaded")

var getTopFiveList = function(){
	$.ajax({
		url:"/getTopFiveList",
		type:"GET",
		data:{},
		success: function(d){
			console.log(d);
			return(d);
		}
	});
	console.log("lboard");
}

leaderBoardList = getTopFiveList();
console.log(leaderBoardList)

slider = document.getElementById("year");

var yearUpdate = function(){
	
	var update = function(){
		console.log(slider.innerHTML);
	}
	setInterval(update,250);
}
