var audioContext, buffer, channelData, whiteNoiseSource, primaryGainControl;

window.onload = function () {
  audioContext = new AudioContext();
  buffer = audioContext.createBuffer(1, audioContext.sampleRate * 1, audioContext.sampleRate)
channelData = buffer.getChannelData(0)
for (let i = 0; i < buffer.length; i++)
{
  channelData[i] = Math.random() * 2 - 1;
}
whiteNoiseSource = audioContext.createBufferSource();
whiteNoiseSource.buffer = buffer;

primaryGainControl = audioContext.createGain()
primaryGainControl.gain.setValueAtTime(0.05, 0)

whiteNoiseSource.connect(primaryGainControl)
primaryGainControl.connect(audioContext.destination)
};

document.getElementById('overlayBtn').addEventListener('click', function () {
  audioContext.resume().then(() => {
    console.log('Playback resumed successfully');
  });
});

const drawAudio = () => {
  fetch('https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3')
    .then((response) => response.arrayBuffer())
    .then((arrayBuffer) => audioContext.decodeAudioData(arrayBuffer))
    .then((audioBuffer) => draw(normalizeData(filterData(audioBuffer))));
};

const filterData = (audioBuffer) => {
  const rawData = audioBuffer.getChannelData(0);
  const samples = 70; 
  const blockSize = Math.floor(rawData.length / samples);
  const filteredData = [];
  for (let i = 0; i < samples; i++) {
    let blockStart = blockSize * i;
    let sum = 0;
    for (let j = 0; j < blockSize; j++) {
      sum = sum + Math.abs(rawData[blockStart + j]); 
    }
    filteredData.push(sum / blockSize);
  }
  return filteredData;
};

const normalizeData = (filteredData) => {
  const multiplier = Math.pow(Math.max(...filteredData), -1);
  return filteredData.map((n) => n * multiplier);
};

const draw = (normalizedData) => {
  const canvas = document.getElementById('myCanvas');
  const dpr = window.devicePixelRatio || 1;
  const padding = 20;
  canvas.width = canvas.offsetWidth * dpr;
  canvas.height = (canvas.offsetHeight + padding * 2) * dpr;
  const ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);
  ctx.translate(0, canvas.offsetHeight / 2 + padding);

  const width = canvas.offsetWidth / normalizedData.length;
  for (let i = 0; i < normalizedData.length; i++) {
    const x = width * i;
    let height = normalizedData[i] * canvas.offsetHeight - padding;
    if (height < 0) {
      height = 0;
    } else if (height > canvas.offsetHeight / 2) {
      height = height > canvas.offsetHeight / 2;
    }
    drawLineSegment(ctx, x, height, width, (i + 1) % 2);
  }
};
const drawLineSegment = (ctx, x, height, width, isEven) => {
  ctx.lineWidth = 1;
  ctx.strokeStyle = '#fff';
  ctx.beginPath();
  height = isEven ? height : -height;
  ctx.moveTo(x, 0);
  ctx.lineTo(x, height);
  ctx.arc(x + width / 2, height, width / 2, Math.PI, 0, isEven);
  ctx.lineTo(x + width, 0);
  ctx.stroke();
};

drawAudio(
);