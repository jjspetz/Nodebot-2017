var five = require("johnny-five");
var Tessel = require("tessel-io");
var board = new five.Board({
  io: new Tessel()
});

board.on("ready", function() {
  var led = new five.Led("A6");
  var button = new five.Button("A5");

  button.on("press", function() { led.on() });
  button.on("hold", function() { led.blink(50) });
  button.on("release", function() { led.stop().off() });
});
