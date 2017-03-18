
var modal = document.getElementById('modal1');

var foo = function(){
  modal.setAttribute("style", "display:block")
};

setTimeout(foo, 1000);

var butt = document.getElementById("button");

butt.addEventListener("click", function(){

  modal.setAttribute("style", "display:hidden");

})
