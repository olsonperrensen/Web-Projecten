var angle, radians, sine;
for (angle = 0; angle <=360; angle += 30)
{
    radians = angle * Math.PI / 180;
    sine = Math.sin(radians)
    
    document.write("<tr><td>" + angle + 
    "</td><td>" + sine.toFixed(6) + "</td></tr>")
}