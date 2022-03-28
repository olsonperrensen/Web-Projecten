
function drawVisualiser3(bufferLength, x, barWidth, barHeight, dataArray){
    for (let i = 0; i < bufferLength; i++){
        barHeight = dataArray[i] * 1.3;
        ctx3.save();
        ctx3.translate(canvas3.width/2, canvas3.height/2);
        ctx3.rotate(i * Math.PI * 4/ bufferLength);
        const hue = 240 + i * 1.5;
        ctx3.lineWidth = barHeight/200;
        ctx3.strokeStyle = 'hsl(' + hue + ',100%, 50%)';
        ctx3.fillStyle = 'hsl(' + hue + ',100%, 50%)';;
        ctx3.beginPath();
        ctx3.moveTo(0,0);
        ctx3.lineTo(0, barHeight);
        ctx3.stroke();
        ctx3.beginPath();
        ctx3.arc(0, barHeight + barHeight/5 , barHeight/20, 0, Math.PI * 2);
        ctx3.fill();
        ctx3.beginPath();
        ctx3.arc(0, barHeight + barHeight/2, barHeight/10, 0, Math.PI * 2);
        ctx3.fill();
        ctx3.restore();
    }
}