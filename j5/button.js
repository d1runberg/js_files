var five = require("johnny-five");
var pi = require("raspi-io");
var board = new five.Board({
	io: new pi()
});

board.on("ready",function(){
	
	var button = new five.Button(13);	//what pin on pi??



button.on("down",function(){

	console.log("down");
});

button.on("up",function(){

	console.log("up");
});

button.on("hold",function(){

	console.log("hold");

});
});
