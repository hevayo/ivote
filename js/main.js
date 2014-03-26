var APP_URL = "http://10.100.5.20:9763/ivote/";
//var APP_URL = "http://54.84.213.30:9763/ivote/"

function vote(decision){
	$.ajax({
		url: APP_URL + decision,
		// the name of the callback parameter, as specified by the YQL service
		jsonp: "callback",
		// tell jQuery we're expecting JSONP
		dataType: "jsonp",
		// work with the response
		success: function( response ) {
			console.log( response ); // server response
		}
	});
}

function reset(){
	$.ajax({
		url: APP_URL + "reset",
		// the name of the callback parameter, as specified by the YQL service
		jsonp: "callback",
		// tell jQuery we're expecting JSONP
		dataType: "jsonp",
		// work with the response
		success: function( response ) {
			console.log( response ); // server response
		}
	});

	$("#counter").html("");
	$("#counter_status").html("<span style=\"color:green;font-family:'fontello';\">Start Voting</span>")
	$('#counter').countdown({
  		image: 'img/digits.png',
  		startTime: '60',
  		timerEnd: function(){ $("#counter_status").html("<span style=\"color:red;font-family:'fontello';\">Voting Ended</span>")},
  		format: 'ss'
	});
}


$(document).ready(function(){

	$("#say_yes").click(function(){		
		vote("yes");
	});

	$("#say_no").click(function(){
		vote("no");
	});	

	$("#reset").click(function(){
		reset();
	});	

});