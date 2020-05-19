let btn = document.querySelector("button");

let regen = document.querySelector("#regen");

regen.style.display = "none";

let epiphany = document.querySelector("#epiphany");

btn.addEventListener("click",function(){
  epiphany.textContent = "You Are Going To Die";
  epiphany.classList.add("show");
  regen.style.display = "block";
  console.log("working");
  btn.style.display = "none";
})

regen.addEventListener("click", function(e){
  epiphany.classList.remove("show");
  this.style.display = "none";
  btn.style.display = "";
  e.preventDefault();
})
