const closeMe = document.querySelector("#closeMe");
const aboutMe = document.querySelector("#about");

closeMe.onclick = () =>{
  aboutMe.style.left == 0 ? aboutMe.style.left = "-250px" : aboutMe.style.left = "0px";
}
