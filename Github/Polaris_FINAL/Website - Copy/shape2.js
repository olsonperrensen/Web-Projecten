function drawVisualiser2(bufferLength, x, barWidth, barHeight, dataArray) {
  for (let i = 0; i < bufferLength; i++) {
    barHeight = dataArray[i] * 0.5;
    barWidth = dataArray[i] * 0.4;
    ctx2.save();
    let x = Math.sin(((i / 160) * Math.PI) / 180) * 80;
    let y = Math.cos(((i / 160) * Math.PI) / 180) * 80;
    ctx2.translate(canvas2.width / 2 + x, canvas2.height / 2 - y / 5);
    ctx2.rotate(i + (Math.PI * 2) / bufferLength);
    const hue = i / 6 + 200;
    ctx2.fillStyle = 'hsl(' + hue + ',100%, 50%)';
    ctx2.strokeStyle = 'hsl(1, 100%, ' + i / 2 + '%)';

    ctx2.fillRect(x, y, barWidth, barHeight);
    ctx2.strokeRect(x, y, barWidth, barHeight);
    ctx2.restore();
    x += barWidth;
  }
}
