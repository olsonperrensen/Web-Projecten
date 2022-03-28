let popup;
const el = document.querySelector('.clock');
const bell = document.querySelector('audio');

const mindiv = document.querySelector('.mins');
const secdiv = document.querySelector('.secs');

const startBtn = document.querySelector('.start');
localStorage.setItem('btn', 'focus');

let initial, totalsecs, perc, paused, mins, seconds;

startBtn.addEventListener('click', () => {
  let btn = localStorage.getItem('btn');

  if (btn === 'focus') {
    mins = +localStorage.getItem('focusTime') || 1;
  } else {
    mins = +localStorage.getItem('breakTime') || 1;
  }

  seconds = mins; // changed from * 60 to removed.
  totalsecs = mins * 60;
  setTimeout(decremenT(), 60);
  startBtn.style.transform = 'scale(0)';
  paused = false;
});

function decremenT() {
  mindiv.textContent = Math.floor(seconds / 60);
  secdiv.textContent = seconds % 60 > 9 ? seconds % 60 : `0${seconds % 60}`;
  if (circle.classList.contains('danger')) {
    circle.classList.remove('danger');
  }

  if (seconds > 0) {
    perc = Math.ceil(((totalsecs - seconds) / totalsecs) * 100);
    setProgress(perc);
    seconds--;
    initial = window.setTimeout('decremenT()', 1000);
    if (seconds < 10) {
      circle.classList.add('danger');
    }
  } else {
    mins = 0;
    seconds = 0;
    bell.play();
    let btn = localStorage.getItem('btn');

    if (btn === 'focus') {
      startBtn.textContent = 'start break';
      startBtn.classList.add('break');
      localStorage.setItem('btn', 'break');

      popup = window.open(
        `tracking_time_over_full.html`,
        ``,
        `height=720,width=1280,top=120`
      );
    }
    //
    else {
      startBtn.classList.remove('break');
      startBtn.classList.remove('done');
      startBtn.textContent = 'start focus';
      localStorage.setItem('btn', 'focus');
    }
    startBtn.style.transform = 'scale(1)';
  }
}
