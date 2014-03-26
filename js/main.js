var APP_URL = "http://localhost:9763/ivote/";
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