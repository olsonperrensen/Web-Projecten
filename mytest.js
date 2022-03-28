var a_ = 'hello world'
function b_() {

}

function b() {
    var myVar;
    console.log(myVar);
}
function a() {
    var myVar = 2;
    console.log(myVar);
    b();
}

var myVar = 1;
console.log(myVar);
a();
console.log(myVar);