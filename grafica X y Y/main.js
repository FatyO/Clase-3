var domMouseX=document.getElementById("coordX");
var domMouseY=document.getElementById("coordY");

var mouseX=0;
var mouseY=0;

console.log(domMouseX);
console.log(domMouseY);

function printCoords(mouseData){
  mouseX=mouseData.clientX;
  mouseY=mouseData.clientY;
  
  domMouseX.innerText = `Mouse X: ${mouseX}`;
  domMouseX.style.transform=`translate(${mouseX}px, ${mouseY}px)`;
  domMouseY.innerText = `Mouse Y: ${mouseY}`;
  domMouseY.style.transform=`translate(${mouseY}px, ${mouseX}px)`;

}

document.addEventListener("mousemove",printCoords);