let p = document.querySelector(`p`);

setInterval(() => {
  let DATE = new Date();
  p.innerText = DATE.getSeconds();
}, 1000);
