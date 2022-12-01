// abre e fecha asides
const headerOpenMe = document.querySelector(".header-open_me");
const headerOpenMenu = document.querySelector(".header-open_menu");

const me = document.querySelector(".about_me");
const menu = document.querySelector(".menu");

const handlerMenuClose = document.querySelector(".handler-menu_close");
const handlerMenuOpen = document.querySelector(".handler-menu_open");

function powerMe (action){
  action == "close" ? closeMe() : openMe();
}
const openMe = () =>{
  me.setAttribute("class","about_me active_me");
  headerOpenMenu.style.visibility = "hidden";
  headerOpenMe.style.visibility = "hidden";
}
const closeMe = () =>{
  me.setAttribute("class","about_me");
  headerOpenMenu.style.visibility = "visible";
  headerOpenMe.style.visibility = "visible";
}

function powerMenuMobile (action){
  action == "close" ? closeMenu() : openMenu();
}
const openMenu = () =>{
  menu.setAttribute("class","menu active_menu");
  headerOpenMe.style.visibility = "hidden";
  headerOpenMenu.style.visibility = "hidden";
}
const closeMenu = () =>{
  menu.setAttribute("class","menu");
  headerOpenMe.style.visibility = "visible";
  headerOpenMenu.style.visibility = "visible";
}

function powerMenuDesktop (action){
  action == "close" ? closeDeskMenu() : openDeskMenu();
}
const openDeskMenu = ()=>{
  menu.style.width = "200px";
  handlerMenuOpen.style.display = "none";
  handlerMenuClose.style.display = "block";
}
const closeDeskMenu = ()=>{
  menu.style.width = "0px";
  handlerMenuClose.style.display = "none";
  handlerMenuOpen.style.display = "block";
}
// abre e fecha asides

// mudança de cor tematica
const cor1 = document.querySelector(".one");
const cor2 = document.querySelector(".two");
const cor3 = document.querySelector(".tree");
const cor4 = document.querySelector(".four");

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
