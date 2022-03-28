var wave1;
var wave2;
var wave3;
var wave4;
var wave5;
var playing;

function setup() {
  createCanvas(400, 400);
  wave1 = new p5.Oscillator();
  
  wave2 = new p5.Oscillator();
  
  wave3 = new p5.Oscillator();
  
  wave4 = new p5.Oscillator();
  
  wave5 = new p5.Oscillator();
  
  wave1.setType('triangle');
  wave1.start();
  wave1.freq(440);
  wave1.amp(0)

  wave2.setType('triangle');
  wave2.start();
  wave2.freq(392);
  wave2.amp(0)
  
  wave3.setType('triangle');
  wave3.start();
  wave3.freq(349.23);
  wave3.amp(0)
  
  wave4.setType('triangle');
  wave4.start();
  wave4.freq(329.63);
  wave4.amp(0)
  
  wave5.setType('triangle');
  wave5.start();
  wave5.freq(349.23);
  wave5.amp(0)

  button1 = createButton('play/pause Wave 1');
  button1.mousePressed(toggle1);
  button2 = createButton('play/pause Wave 2');
  button2.mousePressed(toggle2);
  button3 = createButton('play/pause Wave 3');
  button3.mousePressed(toggle3);
  button4 = createButton('play/pause Wave 4');
  button4.mousePressed(toggle4);
  button5 = createButton('play/pause Wave 5');
  button5.mousePressed(toggle5);
  
  slider1 = createSlider(430, 450, 440, 0.1);
  slider2 = createSlider(382, 402, 392, 0.1);
  slider3 = createSlider(339, 359, 349.23, 0.1);
  slider4 = createSlider(319, 339, 329.63, 0.1);
  slider5 = createSlider(339, 359, 349.23, 0.1);
}

function toggle1()
{
 if (!playing) {
   playing = true;
  wave1.amp(0.1, 2);
 } 
  else
  {
    playing = false;
    wave1.amp(0, 2);
  }
}
function toggle2()
{
 if (!playing) {
   playing = true;
  wave2.amp(0.5, 2);
 } 
  else
  {
    playing = false;
    wave2.amp(0, 2);
  }
}
function toggle3()
{
 if (!playing) {
   playing = true;
  wave3.amp(0.1, 2);
 } 
  else
  {
    playing = false;
    wave3.amp(0, 2);
  }
}
function toggle5()
{
 if (!playing) {
   playing = true;
  wave5.amp(0.1, 2);
 } 
  else
  {
    playing = false;
    wave5.amp(0, 2);
  }
}
function toggle4()
{
 if (!playing) {
   playing = true;
  wave4.amp(0.1, 2);
 } 
  else
  {
    playing = false;
    wave4.amp(0, 2);
  }
}

function draw() {
  background(220);
  
  wave1.freq(slider1.value());
  wave2.freq(slider2.value());
  wave3.freq(slider3.value());
  wave4.freq(slider4.value());
  wave5.freq(slider5.value());
  
  if (playing) {
    background(255, 0, 255);
} else {
    background:51;
  }
}