

function vote(decision){
	$.ajax({
		url: "http://10.100.5.20:9763/ivote/"+decision,
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
		url: "http://10.100.5.20:9763/ivote/reset",
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