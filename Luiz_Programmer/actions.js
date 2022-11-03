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
