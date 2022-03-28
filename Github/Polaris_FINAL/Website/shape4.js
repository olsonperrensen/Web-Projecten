function drawVisualiser4(bufferLength, x, barWidth, barHeight, dataArray) {
  for (let i = 0; i < bufferLength; i++) {
    barHeight = dataArray[i] * 1.47;
    ctx4.save();
    let x = Math.sin((i * Math.PI) / 180) + 2;
    let y = Math.cos((i * Math.PI) / 180) + 2;
    ctx4.translate(canvas4.width / 2 + x, canvas4.height / 2);
    ctx4.rotate(i + (Math.PI * 2) / bufferLength);

    const hue = i * 0.6 + 200;
    ctx4.fillStyle = 'hsl(' + hue + ',100%, 50%)';
    ctx4.strokeStyle = 'hsl(' + hue + ',100%, 50%)';
   
    ctx4.shadowOffsetX = 0;
    ctx4.shadowOffsetY = 0;
    ctx4.shadowColor = 'rgba(0,0,0,1)';

    ctx4.globalCompositeOperation = 'source-over';

    // line
    ctx4.lineWidth = barHeight /2100;
    ctx4.beginPath();
    ctx4.moveTo(x, y);
    ctx4.lineTo(x, y - barHeight);
    ctx4.lineCap = 'round';
    ctx4.stroke();
    ctx4.closePath();

    ctx4.restore();
    x += barWidth;
  }
}
