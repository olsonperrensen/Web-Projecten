const myName = "Olson";
const mySurname = "Perrensen";
const myStreet = "Avenue Garden";
const myNumber = 214;
const myPostalNumber = "9078EA";
const myMunicipality = "Alkmaar";
let myRealNumber1 = parseInt(prompt('This will be your first real number:   '));
let myRealNumber2 = parseInt(prompt('This will be your second real number:  '));
let myRealNumber3 = (myRealNumber1 + myRealNumber2);

document.write
("<p>This is the data I could find for you:</p>"
 + "<br>" + myName + "<br>" + mySurname
 + "<br>" + myStreet + "<br>" + myNumber
 + "<br>" + myPostalNumber + "<br>" + 
 myMunicipality);

 document.write("<hr>" + "Your first number was:  " + 
myRealNumber1 + "<br>" + "And your second number was:  " + 
myRealNumber2);

document.write("<br>" + "The sum of those two numbers combined equals =    " + 
myRealNumber3);

document.write("<br>" + "<p>The real quotient is:   </p>" + myRealNumber1/myRealNumber2 + 
"<p>The remainder of that division is:  </p>"  +  myRealNumber1%myRealNumber2 + 
"<p>Finally, the simplified quotient is:    </p>" + Math.floor(myRealNumber1/myRealNumber2));


var mySum = 0;

for (var i = 0; i < 5; i++) 
{
    var number = prompt("Enter a number (prompts 5 times) : ");
    number = parseInt(number);

    mySum += number;
    
}

var myAverage = 0;

document.write("<hr> Average = " + (myAverage = mySum / 5));