function drawVisualiser(bufferLength, x, barWidth, barHeight, dataArray) {
  for (let i = 0; i < bufferLength; i++) {
    barHeight = dataArray[i] * 2.5;
    ctx.save();
    ctx.translate(canvas.width/ 2, canvas.height / 2);
    ctx.rotate(i * 4.0001);
    const hue = 120 + i * 9.05;
    ctx.fillStyle = 'hsl(' + hue + ',100%,50%)';
    ctx.beginPath();
    ctx.arc(10, barHeight / 2, barHeight / 2, 0, Math.PI / 5.5);
    ctx.fill();
    ctx.stroke();

    x -= barWidth;
    ctx.restore();
  }
}
