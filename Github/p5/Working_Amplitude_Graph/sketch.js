var song;

var button;

var amp;

var volhistory = [];

function preload() {
  song = loadSound('chord.mp3');
}

function setup() {
  createCanvas(400, 400);
  button = createButton('toggle');
  button.mousePressed(toggleSong);
  song.play();
  
  amp = new p5.Amplitude();
}

function toggleSong() {
  if (song.isPlaying()) {
    song.pause();
  }
  else
    {
      song.play();
    }
}

function draw() {
  background(0);
  ellipse(200, 200, 200, vol * 200);
  
  
  var vol = amp.getLevel();
  
  volhistory.push(vol);
  stroke(255);
  beginShape();
  noFill();
  for (var i = 0; i < volhistory.length; i++) {
    var y = map(volhistory[i], 0, 1, height/2, 0);
    point(i, y);
    vertex(i, y);
    endShape();
    }
    if (volhistory.length > width - 90) {
      volhistory.splice(0, 1);
    }
    
  stroke(255, 0, 0);
  line(volhistory.length, 0, volhistory.length, height);
  
}