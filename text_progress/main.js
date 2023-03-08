const level = document.querySelector(".level")
const main_div= document.querySelector(".main-div")

main_div.addEventListener("scroll", function(){
let scrollTop = main_div.scrollTop;
let scrollHeight = main_div.scrollHeight;
let current = (scrollTop / (scrollHeight - main_div.clientHeight)) * 100;
let rounded = Math.round(current);

level.style.width = rounded + "%";
level.innerHTML = rounded +"%"
});