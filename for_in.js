var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

document.write("<h1> The NAV object:</h1>");
for (var field in navigator)
{
    document.write("<strong>"+field+": </strong>" + navigator[field] + "<br>")
}
document.write('<hr>')

document.write("<h1> The WIN object:</h1>");
for (var field in window)
{
    document.write("<strong>"+field+": </strong>" + window[field] + "<br>")
}
document.write('<hr>')

document.write("<h1> The DOC object:</h1>");
for (var field in document)
{
    document.write("<strong>"+field+": </strong>" + document[field] + "<br>")
}
document.write('<hr>')

document.write("<h1> The Person object:</h1>");
for (var field in person)
{
    document.write("<strong>"+field+": </strong>" + person[field] + "<br>")
}
document.write('<hr>')
