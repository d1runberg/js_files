var five = require("johnny-five");
var pi = require("raspi-io");

var board = new five.Board({
	io: new pi()
});

board.on("ready",function(){

var servo = new five.Servo({
	id: "myservo",
	pin: 'P1-12',
	type: "standard",
	range: [0,180],
});
servo.sweep();

});

