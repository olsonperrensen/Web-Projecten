var context = new AudioContext();
var oscillator = context.createOscillator();
oscillator.connect(context.destination);
oscillator.type = 0;
oscillator.frequency.value = 440;
oscillator.start();
