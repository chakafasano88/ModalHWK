
var modal = document.getElementById('modal1');

var timer = function(){
  modal.setAttribute("style", "display:block")
};

setTimeout(timer, 3000);

var butt = document.getElementById("button");

butt.addEventListener("click", function(){

  modal.setAttribute("style", "display:hidden");

})
