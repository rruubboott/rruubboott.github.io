let btn = document.querySelector("button");

let regen = document.querySelector("#regen");

regen.style.display = "none";

let epiphany = document.querySelector("#epiphany");

btn.addEventListener("click",function(){
  epiphany.classList.add("show");
  regen.style.display = "block";
})

regen.addEventListener("click", function(e){
  epiphany.classList.remove("show");
  this.style.display = "none";
  e.preventDefault();
})
