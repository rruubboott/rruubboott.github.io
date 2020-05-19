let btn = document.querySelector("button");

let regen = document.querySelector("#regen");

regen.style.display = "none";

let pronouns = ["You", "He","She","They","I","Me"];

let actions = ["Are Going To", "Might","Could","Should"];

let event = ["Die","Live","Fall In Love","Live Forever"];

let epiphany = document.querySelector("#epiphany");

btn.addEventListener("click",function(){
  epiphany.textContent = "You Are Going To Die";
  regen.style.display = "block";
})

regen.addEventListener("click", function(e){
  epiphany.textContent = "";
  this.style.display = "none";
  e.preventDefault();
})
