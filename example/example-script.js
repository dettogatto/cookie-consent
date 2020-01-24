const checkBTN = document.getElementById("check-js");
const resetBTN = document.getElementById("reset-js");

document.getElementById('js-status').innerHTML = "Javascript is Running!";

checkBTN.addEventListener("click", function(){
  alert("Hello there!");
});

checkBTN.innerHTML = "Now I do something!";

resetBTN.style.display = "inline-block";
