var counter = 1;
number =  parseFloat(prompt('Enter a number: '));
while (counter <= 10)
{
if (counter%2 == 0) {
    document.write('<hr>  Skipped counter  ' + counter + '<br>' + '<hr>')
    counter++;
    continue;
}

document.write(counter + ' times ' + number + ' = ' + counter*number + '<br>');
counter++;
}