var song;
var amp;
var volhistory = [];

function preload() {
  song = loadSound('chord.mp3');
}

function setup() {
  createCanvas(400, 400);
  amp = new p5.Amplitude();
  song.play();
  angleMode(DEGREES);
}

function draw() {
  background(0);
  translate (width/2, height/2);
  var vol = amp.getLevel();
  volhistory.push(vol);
  stroke(255);
  noFill();
  beginShape();
  for (var i = 0; i < 360; i++) {
    var r = map(volhistory[i], 0, 1, 10, 100)
    var x = r * cos(i);
    var y = r * sin(i);
    point(i, y);
    vertex(x, y);
    }
  endShape();
    
    if (volhistory.length > 360) {
      volhistory.splice(0, 1);
    }
}