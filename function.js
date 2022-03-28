function myFixedFunction(parameter1, parameter2, schoolDate) {
    schoolDate = prompt('What is the date your school was founded?');
    return "<em><strong>" + parameter1 + parameter2 + schoolDate + "</strong></em>";    
}
document.write(myFixedFunction());

function myDynamicFunction(setting1,setting2,setting3,setting4)
{
    setting1 = parseInt(prompt('What is your age?'));
    setting2 = parseInt(prompt('At what age did you learn to play your first instrument?'));
    setting3 = prompt('What is the name you gave to your first dog?');
    setting4 = parseFloat(prompt('What decimal number you think would be the closest to Pi?'));
    return "All your parameters are here! Look: " + "<hr>" + setting1 + "<hr>" + setting2 + "<hr>" + setting3 + "<hr>" + setting4 + "<hr>"; 
}

document.write("<h1>" + myDynamicFunction());
alert('Getting your data ready ... please be patient');
