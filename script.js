let btn = document.querySelector("button");

let regen = document.querySelector("#regen");

regen.style.display = "none";

let epiphany = document.querySelector("#epiphany");

btn.addEventListener("click",function(){
  epiphany.textContent = "You Are Going To Die";
  epiphany.classList.add("show");
  regen.style.display = "block";
  console.log("working");
})

regen.addEventListener("click", function(e){
  epiphany.classList.remove("show");
  this.style.display = "none";
  e.preventDefault();
})
