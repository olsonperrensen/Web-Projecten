const files = document.getElementById('fileupload');
//let audioSource;
let analyser;
files.addEventListener('change', function () {
  const files = this.files;
  const audio1 = document.getElementById('audio1');
  audio1.src = URL.createObjectURL(files[0]);
  audio1.load();
  //audio1.play();
  const audioContext = new AudioContext();
  //audioSource = audioContext.createMediaElementSource(audio1);
  analyser = audioContext.createAnalyser();
  //audioSource.connect(analyser);
  analyser.connect(audioContext.destination);
  analyser.fftSize = 2048;
  const bufferLength = analyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);
});

// let audio_picker;
// let audio_duration_raw, audio_duration_approx;

// function start_iframe_timer() {
//   audio_picker = document.getElementById('audio1');
//   audio_duration_raw = audio_picker.duration;
//   audio_duration_approx = Math.ceil(audio_duration_raw);
//   alert(audio_duration_approx);
// }
