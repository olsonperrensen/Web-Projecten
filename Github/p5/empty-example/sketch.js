var song;
var sliderRate;
var sliderPan;
var sliderVolume;
var jumpButton;
var amp;

function setup() {
  createCanvas(400, 400);
  song = loadSound("chord.mp3", loaded);
  sliderRate = createSlider(0.8, 1.2, 1, 0.01);
  sliderPan = createSlider(0, 2, 1, 0.01)
  sliderVolume = createSlider(0, 2, 1, 0.01);
  amp = new p5.Amplitude();
  background(51);
}
function loaded() {
  //song.play();
  console.log("loaded");
  button = createButton("play");
button.mousePressed(togglePlaying);
jumpButton = createButton("Jump");
jumpButton.mousePressed(jumpSong)
function jumpSong(){
var len = song.duration();
  var t = random(len);
  console.log(t)
  song.jump(t);
}}

  function togglePlaying()
{
  if (!song.isPlaying()) {
    song.play();
    song.setVolume(2);
    button.html("pause");
  }
  else {
    song.pause();
    button.html("Play again");
  }
}
function draw() {
  background(85, 65, 240, (song.currentTime() / 7));
 song.pan(sliderPan.value());
 song.rate(sliderRate.value());
song.setVolume(sliderVolume.value());
  var vol = amp.getLevel();
  var diameter = map(vol, 0, 2, 10, 200)
  ellipse(width/2, height/2, 12 *diameter, 13*diameter);
  var length = song.duration();
  var tt = random(length);
  fill(9*tt, 7, 9*length)
  stroke(255, 255, 255)
}
