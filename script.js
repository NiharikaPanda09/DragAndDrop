function drag(){

let dragging = false;
  let mouseX,mouseY;
  let eleX,eleY;

  let boxes = document.querySelectorAll("[draggable]")

  boxes.forEach(box =>{
    box.addEventListener("mousedown",mouseDown);
    box.style.top =0;
    box.style.left = 0;
  });


function mouseDown(e){
  e.preventDefault();
  dragging = this;

 mouseX = e.pageX; //this is to specify the mouse position on the x axis
  mouseY = e.pageY; //this is to specify the mouse position on the y axis

  eleX = parseInt(dragging.style.left);
  eleY = parseInt(dragging.style.top);

  document.addEventListener("mousemove",mouseMove);
  document.addEventListener("mouseup",mouseUp);
  
}

function mouseMove(e){
  if(dragging){

  
  const deltaX = e.pageX - mouseX; //this is to specify the mouse by subtracting the position by x
  const deltaY = e.pageY - mouseY;
    dragging.style.left = eleX + deltaX + "px";
    dragging.style.top = eleY + deltaY + "px";

  }
  
}
function mouseUp(e){
  dragging = false;
}
  
}
drag();