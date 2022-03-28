const audioContext = new AudioContext();

const buffer = audioContext.createBuffer(
    1,
    audioContext.sampleRate * 1,
    audioContext.sampleRate
)

const channelData = buffer.getChannelData(0)

for (let i = 0; i < buffer.length; i++)
{
    channelData[i] = Math.random() * 2 - 1;
}

const whiteNoiseSource = audioContext.createBufferSource();
whiteNoiseSource.buffer = buffer;

const primaryGainControl = audioContext.createGain()
primaryGainControl.gain.setValueAtTime(0.05, 0);

whiteNoiseSource.connect(primaryGainControl)
primaryGainControl.connect(audioContext.destination)

const button = document.createElement('button')
button.innerText = 'White Noise Button'
button.addEventListener("click", () => {
    whiteNoiseSource.start()
})
document.body.appendChild(button)