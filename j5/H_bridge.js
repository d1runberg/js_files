var five = require("johnny-five"); 
var pi = require("raspi-io");

var board = new five.Board({
	io: new pi()
});

board.on("ready",function(){

	var motor = new five.Motor({
      pins:{
	pwm: 'P1-12',	//header 1 pin 12
	dir: 'P1-7'		//
	},
	invertPWM: true
	});

      motor.forward(255);
      board.wait(5000, function(){
      motor.stop();
});
}); 
