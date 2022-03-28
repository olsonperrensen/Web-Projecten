let audio_picker, audio_duration_raw;
let audio_duration_approx, audio_meta_name;

function start_iframe_timer() {
  audio_picker = document.getElementById('audio1');
  audio_duration_raw = audio_picker.duration;
  audio_duration_approx = Math.ceil(audio_duration_raw);
  audio_meta_name = audio_picker.src;
  document.getElementById(`currentsong`).value = `${audio_meta_name}`;
  document.getElementById(`focusTime`).value = `${audio_duration_approx}`;
}
const focusTimeInput = document.querySelector('#focusTime');
const breakTimeInput = document.querySelector('#breakTime');
const completedtaskinput = document.querySelector('#completedtask');
const currenttaskinput = document.querySelector('#currenttask');
const pauseBtn = document.querySelector('.pause');

focusTimeInput.value = localStorage.getItem('focusTime');
breakTimeInput.value = localStorage.getItem('breakTime');

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  localStorage.setItem('focusTime', focusTimeInput.value);
  localStorage.setItem('breakTime', breakTimeInput.value);
});

document.querySelector('.reset').addEventListener('click', () => {
  startBtn.style.transform = 'scale(1)';
  clearTimeout(initial);
  setProgress(0);
  mindiv.textContent = 0;
  secdiv.textContent = 0;
});

pauseBtn.addEventListener('click', () => {
  if (paused === undefined) {
    return;
  }
  if (paused) {
    paused = false;
    initial = setTimeout('decremenT()', 60);
    pauseBtn.textContent = 'pause';
    pauseBtn.classList.remove('resume');
  } else {
    clearTimeout(initial);
    pauseBtn.textContent = 'resume';
    pauseBtn.classList.add('resume');
    paused = true;
  }
});
