// abre e fecha asides
const closeMe = document.querySelector("#STCMe");
const openMe = document.querySelector("#SOMe");

const closeMenu = document.querySelector("#STCMenu");
const openMenu = document.querySelector("#SOMenu");

const closeDeskMenu = document.querySelector("#DCMenu");
const openDeskMenu = document.querySelector("#DOMenu");

const me = document.querySelector("#me");
const menu = document.querySelector("#menu");

openMe.onclick = () =>{
  me.setAttribute("class","me active-me");
  openMenu.style.visibility = "hidden";
  openMe.style.visibility = "hidden";
}
closeMe.onclick = () =>{
  me.setAttribute("class","me");
  openMenu.style.visibility = "visible";
  openMe.style.visibility = "visible";
}

openMenu.onclick = () =>{
  menu.setAttribute("class","menu active-menu");
  openMe.style.visibility = "hidden";
  openMenu.style.visibility = "hidden";
}
closeMenu.onclick = () =>{
  menu.setAttribute("class","menu");
  openMe.style.visibility = "visible";
  openMenu.style.visibility = "visible";
}

openDeskMenu.onclick = ()=>{
  menu.style.width = "200px";
  openDeskMenu.style.display = "none";
  closeDeskMenu.style.display = "block";
}
closeDeskMenu.onclick = ()=>{
  menu.style.width = "0px";
  closeDeskMenu.style.display = "none";
  openDeskMenu.style.display = "block";
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
