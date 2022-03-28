const canvas = document.getElementById('canvas1');
const canvas2 = document.getElementById('canvas2');
const canvas3 = document.getElementById('canvas3');
const canvas4 = document.getElementById('canvas4');
let _alert;

const files = document.getElementById('fileupload');
// files.addEventListener('click', theWaiting)

function theWaiting() {
  _alert = alert('This will take a while...')
  setTimeout(9000, _alert)
}

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas2.width = window.innerWidth;
canvas2.height = window.innerHeight;
canvas3.width = window.innerWidth;
canvas3.height = window.innerHeight;
canvas4.width = window.innerWidth;
canvas4.height = window.innerHeight;



const ctx = canvas.getContext('2d'); // By each having its own cxt, you avoid overlap.
const ctx2 = canvas2.getContext('2d');
const ctx3 = canvas3.getContext('2d');
const ctx4 = canvas4.getContext('2d');

let audioSource;
let analyser;

files.addEventListener('change', function () {
  const files = this.files;
  const audio1 = document.getElementById('audio1');
  audio1.src = URL.createObjectURL(files[0]);
  audio1.load();
  audio1.play();
  const audioContext = new AudioContext();
  audioSource = audioContext.createMediaElementSource(audio1);
  analyser = audioContext.createAnalyser();
  audioSource.connect(analyser);
  analyser.connect(audioContext.destination);
  analyser.fftSize = 2048;
  const bufferLength = analyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);

  const barWidth = 15;
  let barHeight;
  let x;

  function animate() {
    x = 0;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
    ctx3.clearRect(0, 0, canvas3.width, canvas3.height);
    analyser.getByteFrequencyData(dataArray);
    drawVisualiser(bufferLength, x, barWidth, barHeight, dataArray);
    drawVisualiser2(bufferLength, x, barWidth, barHeight, dataArray);
    drawVisualiser3(bufferLength, x, barWidth, barHeight, dataArray);
    drawVisualiser4(bufferLength, x, barWidth, barHeight, dataArray);
    requestAnimationFrame(animate);
  }
  animate();
});

