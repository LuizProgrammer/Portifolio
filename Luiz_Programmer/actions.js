// abre e fecha asides
const closeMe = document.querySelector("#closeMe");
const openMe = document.querySelector("#openMe");
const aboutMe = document.querySelector("#me");

const off = document.querySelector("#offMenu");
const on = document.querySelector("#onMenu");
const menu = document.querySelector("#menu");

closeMe.onclick = () =>{
  aboutMe.style.left = "-250px";
  on.style.display = "";
  openMe.style.visibility = "visible";
}
openMe.onclick = () =>{
  aboutMe.style.left = "0px";
  on.style.display = "none";
  openMe.style.visibility = "hidden";
}

off.onclick = () =>{
  menu.style.right = "-200px";
  openMe.style.display = "";
  on.style.visibility = "visible";
}
on.onclick = () =>{
  menu.style.right = "0px";
  openMe.style.display = "none";
  on.style.visibility = "hidden";
}
// abre e fecha asides

// mudança de cor tematica
const cor1 = document.querySelector("#cor1");
const cor2 = document.querySelector("#cor2");
const cor3 = document.querySelector("#cor3");
const cor4 = document.querySelector("#cor4");

const color = document.querySelector("head link:last-child");


cor1.onclick = () =>{
  color.setAttribute('href', './cor1.css');
}
cor2.onclick = () =>{
  color.setAttribute('href', './cor2.css');
}
cor3.onclick = () =>{
  color.setAttribute('href', './cor3.css');
}
cor4.onclick = () =>{
  color.setAttribute('href', './cor4.css');
}
// mudança de cor tematica
