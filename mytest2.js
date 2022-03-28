function wts() {
    var ms = 3000 + new Date().getTime;
    while (new Date() < ms) {}
    console.log(`finished function`)
}

function cH() {
    console.log(`click event!`)
}

document.addEventListener(`click`, cH);

wts();
console.log(`finished execution`)